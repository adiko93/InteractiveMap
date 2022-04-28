import { Position, Toaster } from "@blueprintjs/core";

export const AppToaster =
  typeof window !== "undefined"
    ? Toaster.create({
        className: "toaster",
        position: Position.TOP,
      })
    : null;
