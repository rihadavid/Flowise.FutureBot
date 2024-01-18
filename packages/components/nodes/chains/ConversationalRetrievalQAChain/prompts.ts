export const default_qa_template = `Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer.

{context}

Question: {question}
Helpful Answer:`

export const qa_template = `
--START OF USER MESSAGE:
{question}
--END OF USER MESSAGE--
--START OF CONTEXT DATA:
{context}
--END OF CONTEXT DATA--
NOW MAKE A DECISION:
If the user message seems to not require further information, like greeting, thanking, small talk, acknowledging your answer etc., respond naturally (e.g. "you are welcome", "have a great day") and ignore the rest of this prompt.
OTHERWISE:
If the user message is not related to the context data, say you don't know the answer.
If the user message is relevant to the context data, answer it using the context data and not prior knowledge.`

export const default_map_reduce_template = `Given the following extracted parts of a long document and a question, create a final answer. 
If you don't know the answer, just say that you don't know. Don't try to make up an answer.

{summaries}

Question: {question}
Helpful Answer:`

export const map_reduce_template = `Given the following extracted parts of a long document and a question, create a final answer. 

{summaries}

Question: {question}
Helpful Answer:`

export const refine_question_template = (sysPrompt?: string) => {
    let returnPrompt = ''
    if (sysPrompt)
        returnPrompt = `Context information is below. 
---------------------
{context}
---------------------
Given the context information and not prior knowledge, ${sysPrompt}
Answer the question: {question}.
Answer:`
    if (!sysPrompt)
        returnPrompt = `Context information is below. 
---------------------
{context}
---------------------
Given the context information and not prior knowledge, answer the question: {question}.
Answer:`
    return returnPrompt
}

export const refine_template = `The original question is as follows: {question}
We have provided an existing answer: {existing_answer}
We have the opportunity to refine the existing answer (only if needed) with some more context below.
------------
{context}
------------
Given the new context, refine the original answer to better answer the question. 
If you can't find answer from the context, return the original answer.`

export const CUSTOM_QUESTION_GENERATOR_CHAIN_PROMPT = `Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question, answer in the same language as the follow up question. include it in the standalone question.
If the follow up question seems to not require further information, like greeting, thanking, small talk, acknowledging answer etc., keep the standalone question same as the original.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone question:`
