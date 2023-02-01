import path from "path";

import type { PostGrid, PostGridOptions, PostGridError } from ".";
import { NO_MAIL_API_KEY } from ".";

export interface ReturnEnvelopeOrder {
	id: string;
	object: string;
	live: boolean;
	quantity_ordered: number;
	return_envelope: string;
	status: string;
	description?: string;
	quantity_filled?: number;
	metadata?: any;
}

export interface ReturnEnvelopeOrderList {
	object: string;
	total_count: number;
	skip: number;
	limit: number;
	data: ReturnEnvelopeOrder[];
}

export class ReturnEnvelopeOrderApi {
	client: PostGrid;
	baseRoute: string;

	constructor(client: PostGrid, options?: PostGridOptions) {
		// eslint-disable-line no-unused-vars
		this.client = client;
		this.baseRoute = "print-mail/v1/";
	}

	async create(
		id: string,
		quantityOrdered: number,
		description?: string,
		metadata?: any
	): Promise<{
		success: boolean;
		returnEnvelopeOrder?: ReturnEnvelopeOrder;
		error?: PostGridError;
	}> {
		// make sure we have the API Key for this call
		if (!this.client.apiKeys.mail) {
			return NO_MAIL_API_KEY;
		}
		// ...and now we can make the call...
		const resp = await this.client.fire(
			"POST",
			path.join(this.baseRoute, "return_envelopes", id, "orders"),
			{
				"x-api-key": this.client.apiKeys.mail,
				body: { quantityOrdered, description, metadata },
			}
		);
		if (resp?.response?.status >= 400) {
			return {
				success: false,
				error: resp?.payload?.error,
			};
		}
		return {
			success: resp && !resp.payload?.error,
			returnEnvelopeOrder: resp.payload,
		};
	}

	async get(
		id: string,
		orderID: string,
		expand?: string
	): Promise<{
		success: boolean;
		returnEnvelopeOrder?: ReturnEnvelopeOrder;
		error?: PostGridError;
	}> {
		// make sure we have the API Key for this call
		if (!this.client.apiKeys.mail) {
			return NO_MAIL_API_KEY;
		}
		// ...and now we can make the call...
		const resp = await this.client.fire(
			"GET",
			path.join(
				this.baseRoute,
				"return_envelopes",
				id,
				"orders",
				orderID
			),
			{ "x-api-key": this.client.apiKeys.mail },
			{ "expand[]": expand }
		);
		if (resp?.response?.status >= 400) {
			return {
				success: false,
				error: resp?.payload?.error,
			};
		}
		return {
			success: resp && !resp.payload?.error,
			returnEnvelopeOrder: resp.payload,
		};
	}

	async list(
		id: string,
		limit?: number,
		skip?: number
	): Promise<{
		success: boolean;
		returnEnvelopeOrderList?: ReturnEnvelopeOrderList;
		error?: PostGridError;
	}> {
		// make sure we have the API Key for this call
		if (!this.client.apiKeys.mail) {
			return NO_MAIL_API_KEY;
		}
		// ...and now we can make the call...
		const resp = await this.client.fire(
			"GET",
			path.join(this.baseRoute, "return_envelopes", id, "orders"),
			{ "x-api-key": this.client.apiKeys.mail },
			{ limit, skip }
		);
		if (resp?.response?.status >= 400) {
			return {
				success: false,
				error: resp?.payload?.error,
			};
		}
		return {
			success: resp && !resp.payload?.error,
			returnEnvelopeOrderList: resp.payload,
		};
	}

	async fill(
		id: string,
		orderID: string
	): Promise<{
		success: boolean;
		returnEnvelopeOrder?: ReturnEnvelopeOrder;
		error?: PostGridError;
	}> {
		// make sure we have the API Key for this call
		if (!this.client.apiKeys.mail) {
			return NO_MAIL_API_KEY;
		}
		// ...and now we can make the call...
		const resp = await this.client.fire(
			"POST",
			path.join(
				this.baseRoute,
				"return_envelopes",
				id,
				"orders",
				orderID,
				"fills"
			),
			{
				"x-api-key": this.client.apiKeys.mail,
			}
		);
		if (resp?.response?.status >= 400) {
			return {
				success: false,
				error: resp?.payload?.error,
			};
		}
		return {
			success: resp && !resp.payload?.error,
			returnEnvelopeOrder: resp.payload,
		};
	}

	async cancel(
		id: string,
		orderID: string,
		expand?: string
	): Promise<{
		success: boolean;
		returnEnvelopeOrder?: ReturnEnvelopeOrder;
		error?: PostGridError;
	}> {
		// make sure we have the API Key for this call
		if (!this.client.apiKeys.mail) {
			return NO_MAIL_API_KEY;
		}
		// ...and now we can make the call...
		const resp = await this.client.fire(
			"DELETE",
			path.join(
				this.baseRoute,
				"return_envelopes",
				id,
				"orders",
				orderID
			),
			{
				"x-api-key": this.client.apiKeys.mail,
			},
			{ "expand[]": expand }
		);
		if (resp?.response?.status >= 400) {
			return {
				success: false,
				error: resp?.payload?.error,
			};
		}
		return {
			success: resp && !resp.payload?.error,
			returnEnvelopeOrder: resp.payload,
		};
	}
}
