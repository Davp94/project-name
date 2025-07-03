FROM node:20
#Crear directorio de trabajo
WORKDIR /app
# Copiar el package.json y package-lock.json
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]