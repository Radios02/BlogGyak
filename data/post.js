import db from "./db.js"

db.prepare(`CREATE TABLE IF NOT EXISTS posts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    title STRING,
    content STRING,
    FOREIGN KEY (userId) REFERENCES users(id)
    )`).run();

export const getPosts = () => db.prepare("SELECT * FROM posts").get();
export const getPostById = (id) =>
  db.prepare(`SELECT * FROM posts WHERE id = ${id}`).get(id);
export const savePost = (userId, title, content) =>
  db
    .prepare(`INSERT INTO posts (userId = ?, title = ?, content = ?), values = (?,?,?)`)
    .run(userId, title, content);
export const updatePost = (id, userId, title, content) =>
  db
    .prepare(`UPDATE posts (SET userId = ?, title = ?, content = ?), WHERE id = ${id}`)
    .run(id, userId, title, content);
export const deletePost = (id) =>
  db.prepare(`DELETE FROM posts WHERE id = ${id}`).run(id);
