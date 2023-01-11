INSERT INTO keyword_news (news_id, keyword_id) 
SELECT news.id, keywords.id from news inner join keywords on news.subject = keywords.keyword 
where news.subject = 'cat'
-- lo mejor es probar el select hasta que te de los resultados esperados.
