// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { ICards } from '@/utils/types/app.types'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<ICards>
) {
	res.status(200).json({
		cards: [
			{
				id: '1',
				src: '/images/cards/1.jpg',
				title:
					'Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae',
				text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium',
				detailText:
					'Group, a Washington D.C.-based strategy consulting firm, has published a report entitled “Cracking the Government Procurement Code” which details the results of an extensive study on the experience of small businesses doing business in government markets. Conducted in partnership with Amazon Business, the report examines the barriers to entry and the barriers to success that small businesses face when selling to the government customers, and the role that B2B e-commerce (i.e., online marketplaces) can play in reducing these barriers.<br/><br/>' +
					'Leveraging the firm’s deep experience supporting public sector acquisition strategy and operations, Censeo developed a comprehensive web-based survey to capture the perspectives of small businesses selling to government customers at the federal, state and local levels. The survey was broadly distributed to a network of 35,000 small businesses currently registered to do business with government customers, and asked respondents to describe the impact of several key barriers to entry and success on their experience selling to the government. To assess the potential enabling role of online marketplaces in government procurement, the survey also asked respondents about their current usage of online marketplaces and the benefits that they provide. Key findings from the report include<br/><br/>:“Despite efforts by government agencies to level the playing field, small businesses still face significant challenges in doing business with the public sector,” said Derrick Moreira, President of Censeo and team leader of the study. “Through this extensive study, we wanted to highlight the perspectives of the small business community and provide tangible focus areas for improvement, particularly in the opportunity space created by the growing adoption of online marketplaces by government procurement officials and small businesses.”',
			},
			{
				id: '2',
				src: '/images/cards/2.jpg',
				title: 'Cracking the Government Procurement Code',
				text: 'molestias excepturi sint occaecati, cupiditate non provident similique sunt in culpa qui officia deserunt molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt',
				detailText:
					'Group, a Washington D.C.-based strategy consulting firm, has published a report entitled “Cracking the Government Procurement Code” which details the results of an extensive study on the experience of small businesses doing business in government markets. Conducted in partnership with Amazon Business, the report examines the barriers to entry and the barriers to success that small businesses face when selling to the government customers, and the role that B2B e-commerce (i.e., online marketplaces) can play in reducing these barriers.<br/><br/>' +
					'Leveraging the firm’s deep experience supporting public sector acquisition strategy and operations, Censeo developed a comprehensive web-based survey to capture the perspectives of small businesses selling to government customers at the federal, state and local levels. The survey was broadly distributed to a network of 35,000 small businesses currently registered to do business with government customers, and asked respondents to describe the impact of several key barriers to entry and success on their experience selling to the government. To assess the potential enabling role of online marketplaces in government procurement, the survey also asked respondents about their current usage of online marketplaces and the benefits that they provide. Key findings from the report include<br/><br/>:“Despite efforts by government agencies to level the playing field, small businesses still face significant challenges in doing business with the public sector,” said Derrick Moreira, President of Censeo and team leader of the study. “Through this extensive study, we wanted to highlight the perspectives of the small business community and provide tangible focus areas for improvement, particularly in the opportunity space created by the growing adoption of online marketplaces by government procurement officials and small businesses.”',
			},
			{
				id: '3',
				src: '/images/cards/3.jpg',
				title:
					'Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae',
				text: 'molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt',
				detailText:
					'Group, a Washington D.C.-based strategy consulting firm, has published a report entitled “Cracking the Government Procurement Code” which details the results of an extensive study on the experience of small businesses doing business in government markets. Conducted in partnership with Amazon Business, the report examines the barriers to entry and the barriers to success that small businesses face when selling to the government customers, and the role that B2B e-commerce (i.e., online marketplaces) can play in reducing these barriers.<br/><br/>' +
					'Leveraging the firm’s deep experience supporting public sector acquisition strategy and operations, Censeo developed a comprehensive web-based survey to capture the perspectives of small businesses selling to government customers at the federal, state and local levels. The survey was broadly distributed to a network of 35,000 small businesses currently registered to do business with government customers, and asked respondents to describe the impact of several key barriers to entry and success on their experience selling to the government. To assess the potential enabling role of online marketplaces in government procurement, the survey also asked respondents about their current usage of online marketplaces and the benefits that they provide. Key findings from the report include<br/><br/>:“Despite efforts by government agencies to level the playing field, small businesses still face significant challenges in doing business with the public sector,” said Derrick Moreira, President of Censeo and team leader of the study. “Through this extensive study, we wanted to highlight the perspectives of the small business community and provide tangible focus areas for improvement, particularly in the opportunity space created by the growing adoption of online marketplaces by government procurement officials and small businesses.”',
			},
			{
				id: '4',
				src: '/images/cards/4.jpg',
				title:
					'Coronation Street star Sam Aston, 25, is set to get married this weekend as fiancée',
				text: 'molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt',
				detailText:
					'Group, a Washington D.C.-based strategy consulting firm, has published a report entitled “Cracking the Government Procurement Code” which details the results of an extensive study on the experience of small businesses doing business in government markets. Conducted in partnership with Amazon Business, the report examines the barriers to entry and the barriers to success that small businesses face when selling to the government customers, and the role that B2B e-commerce (i.e., online marketplaces) can play in reducing these barriers.<br/><br/>' +
					'Leveraging the firm’s deep experience supporting public sector acquisition strategy and operations, Censeo developed a comprehensive web-based survey to capture the perspectives of small businesses selling to government customers at the federal, state and local levels. The survey was broadly distributed to a network of 35,000 small businesses currently registered to do business with government customers, and asked respondents to describe the impact of several key barriers to entry and success on their experience selling to the government. To assess the potential enabling role of online marketplaces in government procurement, the survey also asked respondents about their current usage of online marketplaces and the benefits that they provide. Key findings from the report include<br/><br/>:“Despite efforts by government agencies to level the playing field, small businesses still face significant challenges in doing business with the public sector,” said Derrick Moreira, President of Censeo and team leader of the study. “Through this extensive study, we wanted to highlight the perspectives of the small business community and provide tangible focus areas for improvement, particularly in the opportunity space created by the growing adoption of online marketplaces by government procurement officials and small businesses.”',
			},
		],
	})
}
