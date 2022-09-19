import Head from 'next/head'

interface IProps {
	title: string
	description?: string
	ogUrl?: string
	ogTitle?: string
	ogDescription?: string
	ogLocale?: string
	ogType?: string
}

const SEO = ({
	title,
	description = '',
	ogUrl = '',
	ogTitle = '',
	ogDescription = '',
	ogLocale = 'en_EN',
	ogType = 'article',
}: IProps) => {
	return (
		<Head>
			<title>{title}</title>
			{description && <meta name="description" content={description} />}
			{ogTitle && <meta property="og:title" content={ogTitle} />}
			{ogDescription && (
				<meta property="og:description" content={ogDescription} />
			)}
			{ogUrl && <meta property="og:url" content={ogUrl} />}
			{ogLocale && <meta property="og:locale" content={ogLocale} />}
			{ogType && <meta property="og:type" content={ogType} />}
		</Head>
	)
}

export default SEO
