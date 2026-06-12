export type Alert = {
  cause: string;
  message: string;
  isOk: boolean;
  statusMessage: string;
};

export type Command = {
  arguments: string[];
  return: string;
};
