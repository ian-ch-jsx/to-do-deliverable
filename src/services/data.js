import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();
}

export async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUp({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({ email, password });
  if (error) {
    throw error;
  }
  return user;
}

export async function logout() {
  const resp = await client.auth.signOut();
  return checkError(resp);
}

export async function getTasks() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}

export async function getTaskById(id) {
  const resp = await client.from('todos').select('*').match({ id }).single();
  return checkError(resp);
}

export async function addTask(task) {
  const resp = await client.from('todos').insert([{ task: task, user_id: client.auth.user().id }]);
  return checkError(resp);
}

export async function completeTask(id, is_complete) {
  const resp = await client.from('todos').update({ is_complete }).match({ id });
  return checkError(resp);
}

export async function deleteTask(id) {
  const resp = await client.from('todos').delete().match({ id });
  return checkError(resp);
}
