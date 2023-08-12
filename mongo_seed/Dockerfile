FROM mongo

COPY shop-web.ads.json /shop-web.ads.json
COPY shop-web.users.json /shop-web.users.json
COPY shop-web.categories.json /shop-web.categories.json
COPY shop-web.profiles.json /shop-web.profiles.json
CMD mongoimport --host mongodb --db shop-web --collection users --type json --file /shop-web.users.json --jsonArray && \
    mongoimport --host mongodb --db shop-web --collection ads --type json --file /shop-web.ads.json --jsonArray && \
    mongoimport --host mongodb --db shop-web --collection categories --type json --file /shop-web.categories.json --jsonArray && \
    mongoimport --host mongodb --db shop-web --collection profiles --type json --file /shop-web.profiles.json --jsonArray