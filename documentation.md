# Suave Ghost Theme - Documentation

**Created**: 20 October, 2013 . **Updated**: 20 October, 2013 . **By**: Aestik ([http://aestik.com](http://aestik.com)). **Support**: Please use our contact form our profile page ([http://themeforest.net/user/aestik](http://themeforest.net/user/aestik))

Thank you for purchasing our theme. If you have any questions that are beyond the scope of this help file, please feel free to contact us via contact form on our profile page. Thanks so much!

## Files

The package contains several files : 

1. Theme Files. Consists of the following files and folders :  
	a. **Folder Assets**. This will be your theme assets files. css, javascript and images are inside this folder.
	b. **Folder skins**. Here you'll find some predefined styles for your theme.
	c. **Folder Partials**. This is where the handlebars partial files used by main files of this theme.
	d. **main .hbs files**. You'll see index.hbs files. index.hbs is the default index file, and index-ii.hbs is the alternative homepage file.
2. Documentation 

## Installing Ghost

To Install Ghost you can refer to the official documentation at **Ghost** Website ([http://docs.ghost.org/installation/](http://docs.ghost.org/installation/)). They have detailed documentations about how to install Ghost locally or on your server. 

## Installing Theme

To install this theme is pretty straight forward, all you need to do is simply follow  these steps : 

1. extract **suave.zip** into theme directory. extract or put extracted folder into : `content/themes/`
2. restart your ghost aplication : `$ npm start` 
3. open your ghost admin panel. something like *http://yourdomain.com/ghost* and login with your credential and navigate into "**settings**". find a dropdown with label "**themes**", choose the theme and hit save to save the changes. 

That's all you need to do to install ghost theme. 

## Changing Index/Homepage

We provide you with two different homepages design. the default one is `index.hbs`. if you want to change the homepage with another one, simply rename the `index.hbs` into something like, `index-iii.hbs` or just delete it. and rename `index-ii.hbs` into `index.hbs`, you'll have a different look in your homepages. 

## Removing Homepage switcher

To remove the homepage switcher, please follow these simple steps:

1. in the suave theme directory, open the `partials/nav.hbs` file
2. remove codes from line **16** till **27**

## Changing Skins

To change default color-scheme with one of the skins we provide, just rename one of the skin file you desire into `style.css` and replace the style.css in folder `assets/css`.

## Using Disqus

To use Disqus comment, please refer to Disqus documentation here: [http://help.disqus.com/customer/portal/articles/466208-what-s-a-shortname-](http://help.disqus.com/customer/portal/articles/466208-what-s-a-shortname-) and add your Disqus shortname in `post.hbs` line `150` that contains this code: `var disqus_shortname = 'yoursiteshortname';`

# Removing Disqus

To remove Disqus comment, simply remove the block that begins with this comment : `{{!-- Disqus Thread Container--}}` from line `138` to line `166`

## Post Editing

Ghost markdown editor is pretty neat, though sometimes it could requires an extra workload to do some things. We provide you with a few predefined styles to be used at editing/posting your blog post. 

- if you want to have a headline/sub-headline in your blog post, simple use the following code into your markdown editor : 

		<p class="sub-headline">
			type your headline here...
		</p>

- if you want to give an image caption under the image you posted. use this code : 
		
		your image will be here...
		
		<span class="caption">
			your image caption here...
		</span>
		
- If you want to center things. to center-aligned an image for instance, you could use this code : 

		<p class="centered">
			your image here...
		</p>

alternatively, you could use **twitter bootstrap's** classes to use in your markdown editor. we already customized several bootstrap elements for you.  


## Credit

1. **Social Icons** from **Brandico** : [https://github.com/fontello/brandico.font](https://github.com/fontello/brandico.font)
2. **Images** used in previews, cover and demo posts from **unsplash.com** : [http://unsplash.com/](http://unsplash.com/)
3. **Twitter Bootstrap** : [http://getbootstrap.com/](http://getbootstrap.com/)
4. **jQuery Cookie Plugin** : [https://github.com/carhartl/jquery-cookie](https://github.com/carhartl/jquery-cookie) 
5. **jQuery FitVids Plugin** : [http://fitvidsjs.com/](http://fitvidsjs.com/)
6. **Respond.js** : [https://github.com/scottjehl/Respond](https://github.com/scottjehl/Respond) 

---

Once again, thank you so much for puchasing our theme. If you have a question regarding this theme please contact us from our profile page. we'll try our best to help you as far as we could.

Regards, 

Aestik.  
 


