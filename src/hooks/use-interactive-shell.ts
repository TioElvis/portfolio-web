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
      message: `The command "go" allows you to go directly to a file .url`,
      isOk: true,
      statusMessage: "ok",
    },
  },
  {
    type: "alert",
    c: {
      cause: "help",
      message: `Is there a secret?`,
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
      "Hello world, I was working here and I think there is a hidden file",
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

export function useInteractiveShell() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState<DisplayItem[]>(INIT_DISPLAY_ITEMS);

  const [history, setHistory] = useState<string[]>([]);
  const [historyCurrentIndex, setCurrentHistoryIndex] = useState(0);

  const handleEnterKey = () => {
    if (!input.trim()) return;

    const [command, ...args] = input.split(" ");

    if (!COMMANDS.includes(command)) {
      const alert: Alert = {
        cause: "error",
        message: "Command not found",
        isOk: false,
        statusMessage: "404",
      };

      const _display: DisplayItem[] = [...display, { type: "alert", c: alert }];

      setDisplay(_display);
    }

    const _args = args[0];

    if (command === "ls") {
      let command: Command = {
        arguments: [],
        return: "",
      };

      if (_args && _args === "-a") {
        const files = FILES.map((e) => e.name).join(" ");

        command.return = files;
      } else {
        const files = FILES.filter((e) => !e.name.startsWith("."))
          .map((e) => e.name)
          .join(" ");

        command.return = files;
      }

      const _display: DisplayItem[] = [
        ...display,
        { type: "command", c: command },
      ];

      setDisplay(_display);
    }

    if (command === "cat") {
      const file = FILES.find((e) => e.name === _args);

      if (!file) {
        const alert: Alert = {
          cause: "error",
          message: "File not found",
          isOk: false,
          statusMessage: "404",
        };

        const _display: DisplayItem[] = [
          ...display,
          { type: "alert", c: alert },
        ];

        setDisplay(_display);
      } else {
        const command: Command = {
          arguments: [],
          return: file.content,
        };

        const _display: DisplayItem[] = [
          ...display,
          { type: "command", c: command },
        ];

        setDisplay(_display);
      }
    }

    if (command === "go") {
      const file = FILES.find((e) => e.name === _args);

      if (!file) {
        const alert: Alert = {
          cause: "error",
          message: "File not found",
          isOk: false,
          statusMessage: "404",
        };

        const _display: DisplayItem[] = [
          ...display,
          { type: "alert", c: alert },
        ];

        setDisplay(_display);
      } else if (!file?.name.endsWith(".url")) {
        const alert: Alert = {
          cause: "error",
          message: "File must end with .url",
          isOk: false,
          statusMessage: "400",
        };

        const _display: DisplayItem[] = [
          ...display,
          { type: "alert", c: alert },
        ];

        setDisplay(_display);
      } else {
        const commandDisplay: Command = {
          arguments: [],
          return: `Open new page to ${file.name}`,
        };

        const _display: DisplayItem[] = [
          ...display,
          { type: "command", c: commandDisplay },
        ];

        window.open(file.content, "_blank", "noopener,noreferrer");

        setDisplay(_display);
      }
    }

    if (command === "clear") {
      setDisplay([]);
    }

    if (command === "help") {
      const _display: DisplayItem[] = [...display, ...HELP_DISPLAY_ITEMS];

      setDisplay(_display);
    }

    const newHistory = [...history, input];
    const newIndex = newHistory.length;

    setHistory(newHistory);
    setCurrentHistoryIndex(newIndex);

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
    if (e.key === "Enter") {
      e.preventDefault();
      handleEnterKey();
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

  return { input, setInput, handleKeyDown, display };
}
