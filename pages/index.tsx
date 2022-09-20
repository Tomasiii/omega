import type { NextPage } from 'next'
import { GetStaticProps } from 'next'

import { Cards } from '@/components'

import { AppService } from '@/services/app.service'

import SEO from '@/utils/seo/SEO'
import { ICards } from '@/utils/types/app.types'

const Home: NextPage<ICards> = ({ cards }: ICards) => {
  return (
      <>
        <SEO
            title="Omega"
            description="some description"
            ogTitle={'some og title'}
        />
        <Cards cardsItems={cards} />
      </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: cards } = await AppService.getCards()
    return {
      props: { cards: cards.cards },
    }
  } catch {
    return {
      notFound: true,
    }
  }
}

export default Home
