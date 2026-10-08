export interface ApiRequest<TInput> {
  userId: string;
  path: string;
  body: TInput;
}

export interface ApiResponse<TOutput> {
  success: boolean;
  data?: TOutput;
  error?: string;
}

export interface EndpointDefinition<TInput, TOutput> {
  requiredRole: string;
  handler: (
    request: ApiRequest<TInput>
  ) => Promise<ApiResponse<TOutput>>;
}
