export type FilterClauseType = {
	id: string;
	condition: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than';
	value: number | string;
}

export interface FilloutQuestion {
    id: string,
    name: string,
    type: string,
    value: string | number
}

export interface FilloutCalculation {
    id: string,
    name: string,
    type: string,
    value: string | number
}

export interface FilloutUrlParameter {
    id: string,
    name: string,
    value: string | number
}

export interface FilloutQuiz {
    score: number,
    maxScore: number
}

export interface FilloutResponse {
    questions: Array<FilloutQuestion>,
    calculations: Array<FilloutCalculation>,
    urlParameters: Array<FilloutUrlParameter>,
    quiz: FilloutQuiz,
    submissionId: string,
    submissionTime: string
}

export interface FilloutSubmissions {
    responses: Array<FilloutResponse>,
    totalResponses: number,
    pageCount: number
}
