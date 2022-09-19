export interface ICard {
	id: string
	src: string
	title: string
	text: string
	detailText: string
}
export interface ICards {
	cards: ICard[]
}

export interface ICurrentCardContext {
	currentCard: ICard | undefined
}
