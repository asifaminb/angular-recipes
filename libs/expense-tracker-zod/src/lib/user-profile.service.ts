// user-profile.service.ts
import { Injectable } from '@angular/core';
import { userProfileSchema } from './validation';
import {z} from "zod";

@Injectable({
	providedIn: 'root',
})
export class UserProfileService {

	validateUserProfile(data: never) {
		try {
			// `parse` will throw if validation fails
			const validatedData = userProfileSchema.parse(data);
			// If successful, return the validated data
			return validatedData;
		} catch (error) {
			if (error instanceof z.ZodError) {
				// Return or handle the error messages
				return error.issues.map(issue => issue.message);
			}
			// If there's any other kind of error, rethrow it
			throw error;
		}
	}
}
