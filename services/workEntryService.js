import { sql } from "../database/database.js";

const createWorkEntry = async (taskId) => {
  await sql`INSERT INTO
    work_entries (task_id, started_on)
    VALUES (${taskId}, NOW())`;
};

const findCurrentWorkEntry = async (taskId) => {
  const rows = await sql`SELECT * FROM work_entries
    WHERE task_id = ${ taskId } AND finished_on IS NULL`;

  if (rows && rows.length > 0) {
    return rows[0];
  }

  return false;
};

const finishWorkEntry = async (request) => {
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    await workEntryService.finishWorkEntry(urlParts[4]);
  
    return requestUtils.redirectTo(`/tasks/${urlParts[2]}`);
  };

  const calculateTotalTime = async (taskId) => {
    const rows = await sql`SELECT SUM(finished_on - started_on) AS total_time
        FROM work_entries
        WHERE task_id = ${ taskId }
          AND finished_on IS NOT NULL`;
  
    if (rows && rows[0] && rows[0].total_time) {
      return rows[0].total_time;
    }
  
    return 0;
  };
export { createWorkEntry, findCurrentWorkEntry, finishWorkEntry, calculateTotalTime };