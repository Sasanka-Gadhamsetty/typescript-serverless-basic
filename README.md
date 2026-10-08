# TypeScript API Framework Training

This package demonstrates a common enterprise AWS Lambda architecture:

- Cognito performs authentication
- Central authorization determines endpoint access
- Endpoint registry maps names to handlers
- Generic request/response envelopes standardize APIs
- keyof typeof is used to derive endpoint names
- Generic contracts provide compile-time safety

## Files

### types.ts
Shared request/response contracts.

### domain.ts
Business domain models.

### auth.ts
Role-based authorization.

### handlers.ts
Endpoint implementation.

### registry.ts
Central endpoint registry using `keyof typeof`.

### dispatcher.ts
Single dispatcher responsible for authorization and routing.

### advanced-generics.ts
Demonstrates generic endpoint contracts and strongly typed dispatch.

## Topics to Review

- Generics
- keyof
- keyof typeof
- Mapped types
- Generic constraints
- Centralized authorization
- Request validation
- Lambda dispatch patterns
- Enterprise API architecture
