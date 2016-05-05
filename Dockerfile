FROM licaon/nodejs:6.0
COPY . /app/
RUN ["npm", "install"]