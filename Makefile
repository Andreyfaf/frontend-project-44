install: # При первом клонировании репозитория.
	npm ci

brain-games: # Запуск игры.
	node bin/brain-games.js

brain-even: # Запуск игры Even or No.
	node bin/brain-even.js	

brain-calc: # Запуск игры Калькулятор.
	node bin/brain-calc.js	

brain-gcd: # Запуск игры Найти общий делитель.
	node bin/brain-gcd.js

brain-progression: # Запуск игры Найти пропущенный член прогрессии.
	node bin/brain-progression.js

brain-prime: # Запуск игры Prime or No.
	node bin/brain-prime.js	

publish: # Публикация.
	npm publish --dry-run

lint: # Запуск линтера.
	npx eslint .

test: # Запуск теста.
	npm test

test-coverage:
	npm test -- --coverage