export const maxLength = (text: string, maxChar = 200) => {
	return text.length < maxChar ? text : text.slice(0, 196) + '...'
}
