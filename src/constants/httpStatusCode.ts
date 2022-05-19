export const httpStatusCode = {
	ok: 200,
	created: 201,
	accepted: 202,
	noContent: 204,
	movedPermanently: 301,
	badRequest: 400,
	unauthorized: 401,
	forbidden: 403,
	notFound: 404,
	requestTimeout: 408,
	unprocessableEntity: 422,
	internalServerError: 500,
	serviceUnavailable: 503,
} as const;

export type HttpStatusCode = typeof httpStatusCode[keyof typeof httpStatusCode];
