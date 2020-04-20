export function isPromise(candidate: unknown): candidate is Promise<unknown> {
  return Promise.resolve(candidate) === candidate;
}

export default isPromise;
