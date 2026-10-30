import { useState } from "react";

import type { Alert, Command } from "@/types/terminal";

type DisplayItem =
  | { type: "alert"; c: Alert }
  | { type: "command"; c: Command };

type File = {
  name: string;
  content: string;
};

const COMMANDS = ["ls", "cat", "clear", "go", "help"];

export const SUGGESTED_COMMANDS = ["help", "ls", "cat README.txt", "go github"];

const HELP_DISPLAY_ITEMS: DisplayItem[] = [
  {
    type: "alert",
    c: {
      cause: "help",
      message: `Allowed commands: ${COMMANDS.join(", ")}`,
      isOk: true,
      statusMessage: "ok",
    },
  },
  {
    type: "alert",
    c: {
      cause: "help",
      message: `"go github" opens a .url file. Tab completes commands and files`,
      isOk: true,
      statusMessage: "ok",
    },
  },
  {
    type: "alert",
    c: {
      cause: "help",
      message: `Is there a secret? Hidden files start with a dot`,
      isOk: false,
      statusMessage: "401",
    },
  },
];

const INIT_DISPLAY_ITEMS: DisplayItem[] = [
  {
    type: "alert",
    c: {
      cause: "init",
      message: "Initialize minishell",
      isOk: true,
      statusMessage: "ok",
    },
  },
  ...HELP_DISPLAY_ITEMS,
];

const FILES: File[] = [
  {
    name: "README.txt",
    content:
      "Hello world, I was working here and I think there is a hidden file (try ls -a)",
  },
  {
    name: "Linkedin.url",
    content: "https://www.linkedin.com/in/elvis-vera-3657ba365/",
  },
  {
    name: "Github.url",
    content: "https://github.com/TioElvis",
  },
  {
    name: "Youtube.url",
    content: "https://www.youtube.com/@tioelvis4615",
  },
  {
    name: ".secret",
    content: "You find me 😼, welcome to my portfolio web!",
  },
];

const error = (message: string, statusMessage: string): DisplayItem => ({
  type: "alert",
  c: { cause: "error", message, isOk: false, statusMessage },
});

const output = (text: string): DisplayItem => ({
  type: "command",
  c: { arguments: [], return: text },
});

// "github", "Github.url" and "github.URL" all find the same file
function findFile(name: string | undefined) {
  if (!name) return undefined;
  const wanted = name.toLowerCase();

  return FILES.find((e) => {
    const file = e.name.toLowerCase();
    return file === wanted || file === `${wanted}.url`;
  });
}

function complete(input: string) {
  const [command, ...args] = input.trimStart().split(/\s+/);

  if (args.length === 0) {
    const matches = COMMANDS.filter((e) => e.startsWith(command.toLowerCase()));
    return matches.length === 1 ? `${matches[0]} ` : input;
  }

  if (args.length === 1 && (command === "cat" || command === "go")) {
    const prefix = args[0].toLowerCase();
    const matches = FILES.filter(
      (e) =>
        e.name.toLowerCase().startsWith(prefix) &&
        (prefix.startsWith(".") || !e.name.startsWith(".")) &&
        (command === "cat" || e.name.endsWith(".url")),
    );
    return matches.length === 1 ? `${command} ${matches[0].name}` : input;
  }

  return input;
}

export function useInteractiveShell() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState<DisplayItem[]>(INIT_DISPLAY_ITEMS);

  const [history, setHistory] = useState<string[]>([]);
  const [historyCurrentIndex, setCurrentHistoryIndex] = useState(0);

  const execute = (line: string): DisplayItem[] | null => {
    const [rawCommand, ...args] = line.trim().split(/\s+/);
    const command = rawCommand.toLowerCase();

    if (command === "ls") {
      const showHidden = args.some((e) => /^-\w*a/.test(e));
      const files = FILES.filter((e) => showHidden || !e.name.startsWith("."));
      return [output(files.map((e) => e.name).join(" "))];
    }

    if (command === "cat") {
      const file = findFile(args[0]);
      return [file ? output(file.content) : error("File not found", "404")];
    }

    if (command === "go") {
      const file = findFile(args[0]);

      if (!file) return [error("File not found", "404")];
      if (!file.name.endsWith(".url")) {
        return [error("File must end with .url", "400")];
      }

      window.open(file.content, "_blank", "noopener,noreferrer");
      return [output(`Open new page to ${file.name}`)];
    }

    if (command === "help") return HELP_DISPLAY_ITEMS;

    return null;
  };

  const run = (line: string) => {
    if (!line.trim()) return;

    const command = line.trim().split(/\s+/)[0].toLowerCase();

    if (command === "clear") {
      setDisplay([]);
    } else {
      const items = execute(line);
      setDisplay((prev) => [
        ...prev,
        ...(items ?? [error("Command not found", "404")]),
      ]);
    }

    // Only valid commands are worth recalling with the arrows
    if (COMMANDS.includes(command)) {
      const newHistory = [...history, line.trim()];
      setHistory(newHistory);
      setCurrentHistoryIndex(newHistory.length);
    } else {
      setCurrentHistoryIndex(history.length);
    }

    setInput("");
  };

  const handleArrowUpKey = () => {
    if (historyCurrentIndex > 0) {
      const newIndex = historyCurrentIndex - 1;
      setCurrentHistoryIndex(newIndex);
      setInput(history[newIndex]);
    }
  };

  const handleArrowDownKey = () => {
    if (historyCurrentIndex < history.length - 1) {
      const newIndex = historyCurrentIndex + 1;

      setCurrentHistoryIndex(newIndex);
      setInput(history[newIndex]);
    } else if (historyCurrentIndex === history.length - 1) {
      setCurrentHistoryIndex(history.length);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      // Let Tab leave the shell when there is nothing to complete
      if (!input.trim()) return;
      e.preventDefault();
      setInput(complete(input));
    }

    if (e.key === "Enter") {
      e.preventDefault();
      run(input);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      handleArrowUpKey();
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      handleArrowDownKey();
    }
  };

  return { input, setInput, handleKeyDown, display, run };
}
