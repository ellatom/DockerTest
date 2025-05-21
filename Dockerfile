
FROM cypress/included:13.17.0
WORKDIR /e2e
COPY . .
RUN npm ci
CMD ["npx", "cypress", "run"]

