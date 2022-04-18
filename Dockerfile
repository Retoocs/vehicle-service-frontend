FROM nginx

MAINTAINER Netgrif <timak.projekt@gmail.com>

COPY dist/vehicle-service-frontend/ /usr/share/nginx/html/

COPY vehicle-service-frontend.nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
