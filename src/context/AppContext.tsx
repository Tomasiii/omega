import { ReactNode, createContext } from 'react'

import { ICurrentCardContext } from '@/utils/types/app.types'

export const CurrentCardContext =
	createContext<ICurrentCardContext['currentCard']>(undefined)

interface IAppContextProvider {
	children: ReactNode
	currentCard: ICurrentCardContext['currentCard']
}
export const AppContextProvider = ({
	children,
	currentCard,
}: IAppContextProvider) => {
	return (
		<CurrentCardContext.Provider value={currentCard}>
			{children}
		</CurrentCardContext.Provider>
	)
}
