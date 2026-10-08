import { endpoints, EndpointName } from "./registry";
import { authorize, UserContext } from "./auth";

export async function dispatch(
  endpointName: EndpointName,
  user: UserContext,
  body: unknown
) {
  const endpoint = endpoints[endpointName];

  if (!authorize(user, endpoint.requiredRole)) {
    throw new Error("Forbidden");
  }

  return endpoint.handler({
    userId: user.id,
    path: endpointName,
    body
  } as any);
}
