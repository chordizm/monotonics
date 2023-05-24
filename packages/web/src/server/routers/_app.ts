/**
 * This file contains the root router of your tRPC-backend
 */
import { router } from "../trpc";
import { taskRouter } from "./task";

export const appRouter = router({
  task: taskRouter,
});

export type AppRouter = typeof appRouter;
