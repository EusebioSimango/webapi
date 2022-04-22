echo '\n\n requesting all heroes'
curl localhost:3000/heroes

echo '\n\n requesting flash'
curl localhost:3000/heroes/1

echo '\n\n requesting with wrong body'
curl --silent -X POST \
	--data-binary '{"invalid": "data"}' \
	localhost:3000/heroes

echo '\n\n Creating Flash'
CREATE=$(curl --silent -X POST \
	--data-binary '{"name": "Flash", "age": 100, "power": "The speed of ligth"}' \
	localhost:3000/heroes)

echo CREATE

ID=$(echo $CREATE | jq.id)

echo '\n\n requesting Flash'
curl localhost:3000/heroes/$ID