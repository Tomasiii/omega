import { ICards } from '@/utils/types/app.types'

import { instance } from '../api/instance'

export const AppService = {
	async getCards() {
		return instance.get<ICards>('cards')
	},
}
