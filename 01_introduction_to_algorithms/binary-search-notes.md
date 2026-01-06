O que é

Algoritmo de busca que encontra um item em uma lista ordenada dividindo o espaço de busca sempre pela metade.

⸻

Regra mais importante

A lista PRECISA estar ordenada
Sem isso, a pesquisa binária não funciona.

⸻

Como funciona (passo a passo)
	1.	Defino dois índices:
	•	baixo = 0
	•	alto = último índice
	2.	Calculo o meio:
	•	meio = (baixo + alto) // 2
	3.	Comparo o valor do meio com o item procurado:
	•	Se for igual → achou
	•	Se for maior → descarto a metade da direita
	•	Se for menor → descarto a metade da esquerda
	4.	Repito até encontrar ou acabar a lista.