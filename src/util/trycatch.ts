export async function trycatch(promise: Promise<any>) {
  try {
    return [await promise, null];
  } catch (error) {
    return [null, error];
  }
}
