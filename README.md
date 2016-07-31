# express_backbone

mkdir -p /public/javascripts/apps
touch /public/javascripts/require.config.js
touch /public/javascripts/main.js
touch /public/javascripts/router.js

mkdir -p /public/javascripts/apps/(YOUR_VIEWS)/models /public/javascripts/apps/(YOUR_VIEWS)/collections /public/javascripts/apps/(YOUR_VIEWS)/templates /public/javascripts/apps/(YOUR_VIEWS)/views /public/javascripts/apps/(YOUR_VIEWS)


eg:
mkdir -p /public/javascripts/apps/home/models 
mkdir -p /public/javascripts/apps/home/collections 
mkdir -p /public/javascripts/apps/home/templates 
mkdir -p /public/javascripts/apps/home/views

<!-- begin -->
mkdir -p public/javascripts/apps
touch /public/javascripts/require.config.js
touch /public/javascripts/main.js
touch /public/javascripts/router.js

mkdir -p public/javascripts/apps/home
touch public/javascripts/apps/home/app.js

mkdir -p public/javascripts/apps/articles/models/article.js
mkdir -p public/javascripts/apps/articles/collections/articles.js
mkdir -p public/javascripts/apps/articles/templates/articleView.html
mkdir -p public/javascripts/apps/articles/views/articleView.js
touch public/javascripts/apps/articles/app.js