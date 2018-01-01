var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  
  
    
    
      this.add({
          title: "Edge Case: Nested and Mixed Lists",
          excerpt: "Nested and mixed lists are an interesting beast. It’s a corner case to make sure that Lists within lists do...",
          categories: ["docs","Edge Case"],
          tags: ["content","css","edge case","lists","markup"],
          id: 0
      })
      
    
      this.add({
          title: "Edge Case: Nested and Mixed Lists",
          excerpt: "Nested and mixed lists are an interesting beast. It’s a corner case to make sure that Lists within lists do...",
          categories: ["test","Edge Case"],
          tags: ["content","css","edge case","lists","markup"],
          id: 1
      })
      
    
      this.add({
          title: "Edge Case: Many Tags",
          excerpt: "This post has many tags.\n",
          categories: ["docs","Edge Case"],
          tags: ["8BIT","alignment","Articles","captions","categories","chat","comments","content","css","dowork","edge case","embeds","excerpt","Fail","featured image","FTW","Fun","gallery","html","image","Jekyll","layout","link","Love","markup","Mothership","Must Read","Nailed It","Pictures","Post Formats","quote","standard","Success","Swagger","Tags","template","title","twitter","Unseen","video","YouTube"],
          id: 2
      })
      
    
      this.add({
          title: "Edge Case: Many Tags",
          excerpt: "This post has many tags.\n",
          categories: ["test","Edge Case"],
          tags: ["8BIT","alignment","Articles","captions","categories","chat","comments","content","css","dowork","edge case","embeds","excerpt","Fail","featured image","FTW","Fun","gallery","html","image","Jekyll","layout","link","Love","markup","Mothership","Must Read","Nailed It","Pictures","Post Formats","quote","standard","Success","Swagger","Tags","template","title","twitter","Unseen","video","YouTube"],
          id: 3
      })
      
    
      this.add({
          title: "Edge Case: Many Categories",
          excerpt: "This post has many categories.\n",
          categories: ["docs","aciform","antiquarianism","arrangement","asmodeus","broder","buying","championship","chastening","disinclination","disinfection","dispatch","echappee","enphagy"],
          tags: ["categories","edge case"],
          id: 4
      })
      
    
      this.add({
          title: "Edge Case: Many Categories",
          excerpt: "This post has many categories.\n",
          categories: ["test","aciform","antiquarianism","arrangement","asmodeus","broder","buying","championship","chastening","disinclination","disinfection","dispatch","echappee","enphagy"],
          tags: ["categories","edge case"],
          id: 5
      })
      
    
      this.add({
          title: "Edge Case: No Body Content",
          excerpt: "\n",
          categories: ["docs","Edge Case"],
          tags: ["content","edge case","layout"],
          id: 6
      })
      
    
      this.add({
          title: "Edge Case: No Body Content",
          excerpt: "\n",
          categories: ["test","Edge Case"],
          tags: ["content","edge case","layout"],
          id: 7
      })
      
    
      this.add({
          title: "Edge Case No Yaml Title",
          excerpt: "This post has no title specified in the YAML Front Matter. Jekyll should auto-generate a title from the filename.\n",
          categories: ["docs","Edge Case"],
          tags: ["edge case","layout","title"],
          id: 8
      })
      
    
      this.add({
          title: "Edge Case No Yaml Title",
          excerpt: "This post has no title specified in the YAML Front Matter. Jekyll should auto-generate a title from the filename.\n",
          categories: ["test","Edge Case"],
          tags: ["edge case","layout","title"],
          id: 9
      })
      
    
      this.add({
          title: "Antidisestablishmentarianism",
          excerpt: "Title should not overflow the content area A few things to check for: Non-breaking text in the title, content, and...",
          categories: ["docs","Edge Case"],
          tags: ["content","css","edge case","html","layout","title"],
          id: 10
      })
      
    
      this.add({
          title: "Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his diebus? Quisque semper aliquid videtur, in volutpat mauris. Nolo enim dicere. Vobis neque ab aliis. Ego feci memetipsum explicans. Gus mortuus est. Lorem opus habeo. Jackson Isai? Tu quoque ... A te quidem a ante. Vos scitis quod blinking res Ive 'been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et ... sunt occid",
          excerpt: "Check for long titles and how they might break a template.\n",
          categories: ["docs","Edge Case"],
          tags: ["content","css","edge case","html","layout","title"],
          id: 11
      })
      
    
      this.add({
          title: "Antidisestablishmentarianism",
          excerpt: "Title should not overflow the content area A few things to check for: Non-breaking text in the title, content, and...",
          categories: ["test","Edge Case"],
          tags: ["content","css","edge case","html","layout","title"],
          id: 12
      })
      
    
      this.add({
          title: "Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his diebus? Quisque semper aliquid videtur, in volutpat mauris. Nolo enim dicere. Vobis neque ab aliis. Ego feci memetipsum explicans. Gus mortuus est. Lorem opus habeo. Jackson Isai? Tu quoque ... A te quidem a ante. Vos scitis quod blinking res Ive 'been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et ... sunt occid",
          excerpt: "Check for long titles and how they might break a template.\n",
          categories: ["test","Edge Case"],
          tags: ["content","css","edge case","html","layout","title"],
          id: 13
      })
      
    
      this.add({
          title: "Post: Modified Date",
          excerpt: "This post has been updated and should show a modified date if used in a layout. All children, except one,...",
          categories: ["docs","Post Formats"],
          tags: ["Post Formats","readability","standard"],
          id: 14
      })
      
    
      this.add({
          title: "Post: Standard",
          excerpt: "All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was...",
          categories: ["docs","Post Formats"],
          tags: ["Post Formats","readability","standard"],
          id: 15
      })
      
    
      this.add({
          title: "Post: Modified Date",
          excerpt: "This post has been updated and should show a modified date if used in a layout. All children, except one,...",
          categories: ["test","Post Formats"],
          tags: ["Post Formats","readability","standard"],
          id: 16
      })
      
    
      this.add({
          title: "Post: Standard",
          excerpt: "All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was...",
          categories: ["test","Post Formats"],
          tags: ["Post Formats","readability","standard"],
          id: 17
      })
      
    
      this.add({
          title: "Post: Chat",
          excerpt: "Abbott: Strange as it may seem, they give ball players nowadays very peculiar names. Costello: Funny names? Abbott: Nicknames, nicknames....",
          categories: ["docs","Post Formats"],
          tags: ["chat","Post Formats"],
          id: 18
      })
      
    
      this.add({
          title: "Post: Chat",
          excerpt: "Abbott: Strange as it may seem, they give ball players nowadays very peculiar names. Costello: Funny names? Abbott: Nicknames, nicknames....",
          categories: ["test","Post Formats"],
          tags: ["chat","Post Formats"],
          id: 19
      })
      
    
      this.add({
          title: "Post: Notice",
          excerpt: "A notice displays information that explains nearby content. Often used to call attention to a particular detail. When using Kramdown...",
          categories: ["docs","Post Formats"],
          tags: ["Post Formats","notice"],
          id: 20
      })
      
    
      this.add({
          title: "Post: Quote",
          excerpt: "Only one thing is impossible for God: To find any sense in any copyright law on the planet. Mark Twain...",
          categories: ["docs","Post Formats"],
          tags: ["Post Formats","quote"],
          id: 21
      })
      
    
      this.add({
          title: "Post: Notice",
          excerpt: "A notice displays information that explains nearby content. Often used to call attention to a particular detail. When using Kramdown...",
          categories: ["test","Post Formats"],
          tags: ["Post Formats","notice"],
          id: 22
      })
      
    
      this.add({
          title: "Post: Quote",
          excerpt: "Only one thing is impossible for God: To find any sense in any copyright law on the planet. Mark Twain...",
          categories: ["test","Post Formats"],
          tags: ["Post Formats","quote"],
          id: 23
      })
      
    
      this.add({
          title: "Post: Link",
          excerpt: "This theme supports link posts, made famous by John Gruber. To use, just add link: http://url-you-want-linked to the post’s YAML...",
          categories: ["docs","Post Formats"],
          tags: ["link","Post Formats"],
          id: 24
      })
      
    
      this.add({
          title: "Post: Link",
          excerpt: "This theme supports link posts, made famous by John Gruber. To use, just add link: http://url-you-want-linked to the post’s YAML...",
          categories: ["test","Post Formats"],
          tags: ["link","Post Formats"],
          id: 25
      })
      
    
      this.add({
          title: "Post: Video (YouTube)",
          excerpt: "YouTube video embed below.\n\n\n",
          categories: ["docs","Post Formats"],
          tags: ["Post Formats"],
          id: 26
      })
      
    
      this.add({
          title: "Post: Video (YouTube)",
          excerpt: "YouTube video embed below.\n\n\n",
          categories: ["test","Post Formats"],
          tags: ["Post Formats"],
          id: 27
      })
      
    
      this.add({
          title: "Post: Header Image with OpenGraph Override",
          excerpt: "This post has a header image with an OpenGraph override.\n\nheader:\n  image: /assets/images/page-header-image.png\n  og_image: /assets/images/page-header-og-image.png\n\n",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["edge case","image","layout"],
          id: 28
      })
      
    
      this.add({
          title: "Post: Overlay Image with OpenGraph Override",
          excerpt: "This post has a header image with an OpenGraph override. header: overlay_image: /assets/images/unsplash-image-1.jpg og_image: /assets/images/page-header-og-image.png caption: \"Photo credit: [**Unsplash**](https://unsplash.com)\" cta_url:...",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["edge case","image","layout"],
          id: 29
      })
      
    
      this.add({
          title: "Post: Image (with Link)",
          excerpt: "\n",
          categories: ["docs","Post Formats"],
          tags: ["image","Post Formats"],
          id: 30
      })
      
    
      this.add({
          title: "Post: Image (Standard)",
          excerpt: "The preferred way of using images is placing them in the /assets/images/ directory and referencing them with an absolute path....",
          categories: ["docs","Post Formats"],
          tags: ["image","Post Formats"],
          id: 31
      })
      
    
      this.add({
          title: "Post: Teaser Image with OpenGraph Override",
          excerpt: "This post has a teaser image with an OpenGraph override.\n\nheader:\n  teaser: /assets/images/page-header-teaser.png\n  og_image: /assets/images/page-header-og-image.png\n\n",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["edge case","image","layout"],
          id: 32
      })
      
    
      this.add({
          title: "Post: Header Image with OpenGraph Override",
          excerpt: "This post has a header image with an OpenGraph override.\n\nheader:\n  image: /assets/images/page-header-image.png\n  og_image: /assets/images/page-header-og-image.png\n\n",
          categories: ["test","Layout","Uncategorized"],
          tags: ["edge case","image","layout"],
          id: 33
      })
      
    
      this.add({
          title: "Post: Overlay Image with OpenGraph Override",
          excerpt: "This post has a header image with an OpenGraph override. header: overlay_image: /assets/images/unsplash-image-1.jpg og_image: /assets/images/page-header-og-image.png caption: \"Photo credit: [**Unsplash**](https://unsplash.com)\" cta_url:...",
          categories: ["test","Layout","Uncategorized"],
          tags: ["edge case","image","layout"],
          id: 34
      })
      
    
      this.add({
          title: "Post: Image (with Link)",
          excerpt: "\n",
          categories: ["test","Post Formats"],
          tags: ["image","Post Formats"],
          id: 35
      })
      
    
      this.add({
          title: "Post: Image (Standard)",
          excerpt: "The preferred way of using images is placing them in the /assets/images/ directory and referencing them with an absolute path....",
          categories: ["test","Post Formats"],
          tags: ["image","Post Formats"],
          id: 36
      })
      
    
      this.add({
          title: "Post: Teaser Image with OpenGraph Override",
          excerpt: "This post has a teaser image with an OpenGraph override.\n\nheader:\n  teaser: /assets/images/page-header-teaser.png\n  og_image: /assets/images/page-header-og-image.png\n\n",
          categories: ["test","Layout","Uncategorized"],
          tags: ["edge case","image","layout"],
          id: 37
      })
      
    
      this.add({
          title: "Post: Image (Linked with Caption)",
          excerpt: "\n\n  \n\n\n  \nStairs? Were we’re going we don’t need no stairs.\n\n\n",
          categories: ["docs","Post Formats"],
          tags: ["image","Post Formats"],
          id: 38
      })
      
    
      this.add({
          title: "Post: Image (Linked with Caption)",
          excerpt: "\n\n  \n\n\n  \nStairs? Were we’re going we don’t need no stairs.\n\n\n",
          categories: ["test","Post Formats"],
          tags: ["image","Post Formats"],
          id: 39
      })
      
    
      this.add({
          title: "Post: Image (Caption)",
          excerpt: "\n\n  \n\n\n  Photo from Unsplash.\n\n",
          categories: ["docs","Post Formats"],
          tags: ["image","Post Formats"],
          id: 40
      })
      
    
      this.add({
          title: "Post: Image (Caption)",
          excerpt: "\n\n  \n\n\n  Photo from Unsplash.\n\n",
          categories: ["test","Post Formats"],
          tags: ["image","Post Formats"],
          id: 41
      })
      
    
      this.add({
          title: "Post: Gallery",
          excerpt: "These are gallery tests for image wrapped in &lt;figure&gt; elements. To place a gallery add the necessary YAML Front Matter:...",
          categories: ["docs","Post Formats"],
          tags: ["gallery","Post Formats","tiled"],
          id: 42
      })
      
    
      this.add({
          title: "Post: Gallery",
          excerpt: "These are gallery tests for image wrapped in &lt;figure&gt; elements. To place a gallery add the necessary YAML Front Matter:...",
          categories: ["test","Post Formats"],
          tags: ["gallery","Post Formats","tiled"],
          id: 43
      })
      
    
      this.add({
          title: "Post: Twitter Embed",
          excerpt: "🎨 Finally got around to adding all my @procreateapp creations with time lapse videos https://t.co/1nNbkefC3L pic.twitter.com/gcNLJoJ0Gn&mdash; Michael Rose (@mmistakes) November...",
          categories: ["docs","Media"],
          tags: ["content","embeds","media","twitter"],
          id: 44
      })
      
    
      this.add({
          title: "Post: Twitter Embed",
          excerpt: "🎨 Finally got around to adding all my @procreateapp creations with time lapse videos https://t.co/1nNbkefC3L pic.twitter.com/gcNLJoJ0Gn&mdash; Michael Rose (@mmistakes) November...",
          categories: ["test","Media"],
          tags: ["content","embeds","media","twitter"],
          id: 45
      })
      
    
      this.add({
          title: "Layout: Comments Disabled",
          excerpt: "This post has its comments disabled.\n\nThere should be no comment form.\n",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["comments","layout"],
          id: 46
      })
      
    
      this.add({
          title: "Layout: Comments Enabled",
          excerpt: "This post should display comments.\n",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["comments","layout"],
          id: 47
      })
      
    
      this.add({
          title: "Layout: Read Time Disabled",
          excerpt: "This post has reading time disabled. The estimated time that it takes to read this post should not be showing...",
          categories: ["docs"],
          tags: ["read time"],
          id: 48
      })
      
    
      this.add({
          title: "Layout: Read Time Enabled",
          excerpt: "This post has reading time enabled. The estimated time that it takes to read this post should show if also...",
          categories: ["docs"],
          tags: ["read time"],
          id: 49
      })
      
    
      this.add({
          title: "Layout: Related Posts Disabled",
          excerpt: "This post has related posts disabled.\n\nRelated post links should not appear.\n",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["related posts","layout"],
          id: 50
      })
      
    
      this.add({
          title: "Layout: Related Posts Enabled",
          excerpt: "This post has related posts enabled.\n",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["related posts","layout"],
          id: 51
      })
      
    
      this.add({
          title: "Layout: Social Sharing Links Disabled",
          excerpt: "This post has social sharing disabled.\n\nSocial sharing links should not appear.\n",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["social","layout"],
          id: 52
      })
      
    
      this.add({
          title: "Layout: Social Sharing Links Enabled",
          excerpt: "This post should display social sharing links.\n",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["social","layout"],
          id: 53
      })
      
    
      this.add({
          title: "Layout: Comments Disabled",
          excerpt: "This post has its comments disabled.\n\nThere should be no comment form.\n",
          categories: ["test","Layout","Uncategorized"],
          tags: ["comments","layout"],
          id: 54
      })
      
    
      this.add({
          title: "Layout: Comments Enabled",
          excerpt: "This post should display comments.\n",
          categories: ["test","Layout","Uncategorized"],
          tags: ["comments","layout"],
          id: 55
      })
      
    
      this.add({
          title: "Layout: Read Time Disabled",
          excerpt: "This post has reading time disabled. The estimated time that it takes to read this post should not be showing...",
          categories: ["test"],
          tags: ["read time"],
          id: 56
      })
      
    
      this.add({
          title: "Layout: Read Time Enabled",
          excerpt: "This post has reading time enabled. The estimated time that it takes to read this post should show if also...",
          categories: ["test"],
          tags: ["read time"],
          id: 57
      })
      
    
      this.add({
          title: "Layout: Related Posts Disabled",
          excerpt: "This post has related posts disabled.\n\nRelated post links should not appear.\n",
          categories: ["test","Layout","Uncategorized"],
          tags: ["related posts","layout"],
          id: 58
      })
      
    
      this.add({
          title: "Layout: Related Posts Enabled",
          excerpt: "This post has related posts enabled.\n",
          categories: ["test","Layout","Uncategorized"],
          tags: ["related posts","layout"],
          id: 59
      })
      
    
      this.add({
          title: "Layout: Social Sharing Links Disabled",
          excerpt: "This post has social sharing disabled.\n\nSocial sharing links should not appear.\n",
          categories: ["test","Layout","Uncategorized"],
          tags: ["social","layout"],
          id: 60
      })
      
    
      this.add({
          title: "Layout: Social Sharing Links Enabled",
          excerpt: "This post should display social sharing links.\n",
          categories: ["test","Layout","Uncategorized"],
          tags: ["social","layout"],
          id: 61
      })
      
    
      this.add({
          title: "Layout: Reading Time, Comments, Social Sharing Links, and Related Posts Disabled",
          excerpt: "This post has reading time, comments, social sharing links, and related posts disabled. Reading time, comments, social sharing and related...",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["related posts","social","comments","layout"],
          id: 62
      })
      
    
      this.add({
          title: "Layout: Post with Table Of Contents",
          excerpt: "Enable table of contents on post or page by adding toc: true to its YAML Front Matter. The title and...",
          categories: ["docs"],
          tags: ["table of contents"],
          id: 63
      })
      
    
      this.add({
          title: "Layout: Reading Time, Comments, Social Sharing Links, and Related Posts Disabled",
          excerpt: "This post has reading time, comments, social sharing links, and related posts disabled. Reading time, comments, social sharing and related...",
          categories: ["test","Layout","Uncategorized"],
          tags: ["related posts","social","comments","layout"],
          id: 64
      })
      
    
      this.add({
          title: "Layout: Post with Table Of Contents",
          excerpt: "Enable table of contents on post or page by adding toc: true to its YAML Front Matter. The title and...",
          categories: ["test"],
          tags: ["table of contents"],
          id: 65
      })
      
    
      this.add({
          title: "Layout: Code Excerpt (Generated)",
          excerpt: "This is the post content with inline code, (e.g. &lt;span style=\"color: red;\"&gt;red&lt;/span&gt;. It should be displayed in place of the...",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["content","excerpt","layout"],
          id: 66
      })
      
    
      this.add({
          title: "Layout: Excerpt (Defined)",
          excerpt: "This is the post content. It should be displayed in place of the user-defined excerpt in archive-index pages. This paragraph...",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["content","excerpt","layout"],
          id: 67
      })
      
    
      this.add({
          title: "Layout: Excerpt (Generated)",
          excerpt: "This is the post content. Archive-index pages should display an auto-generated excerpt of this content. Be sure to test the...",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["content","excerpt","layout"],
          id: 68
      })
      
    
      this.add({
          title: "Layout: Code Excerpt (Generated)",
          excerpt: "This is the post content with inline code, (e.g. &lt;span style=\"color: red;\"&gt;red&lt;/span&gt;. It should be displayed in place of the...",
          categories: ["test","Layout","Uncategorized"],
          tags: ["content","excerpt","layout"],
          id: 69
      })
      
    
      this.add({
          title: "Layout: Excerpt (Defined)",
          excerpt: "This is the post content. It should be displayed in place of the user-defined excerpt in archive-index pages. This paragraph...",
          categories: ["test","Layout","Uncategorized"],
          tags: ["content","excerpt","layout"],
          id: 70
      })
      
    
      this.add({
          title: "Layout: Excerpt (Generated)",
          excerpt: "This is the post content. Archive-index pages should display an auto-generated excerpt of this content. Be sure to test the...",
          categories: ["test","Layout","Uncategorized"],
          tags: ["content","excerpt","layout"],
          id: 71
      })
      
    
      this.add({
          title: "Layout: Author Override",
          excerpt: "Sites that may have content authored from various individuals can be accommodated by using data files. To attribute an author...",
          categories: ["docs"],
          tags: [],
          id: 72
      })
      
    
      this.add({
          title: "Layout: Author Sidebar Disabled",
          excerpt: "This post has the author sidebar disabled.\n\nTo disable add author_profile: false to YAML Front Matter.\n",
          categories: ["docs"],
          tags: [],
          id: 73
      })
      
    
      this.add({
          title: "Layout: Header Image (External URL)",
          excerpt: "This post should display a header image, if the theme supports it. Featured image is an external asset and should...",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["edge case","featured image","image","layout"],
          id: 74
      })
      
    
      this.add({
          title: "Layout: Header Image (Horizontal)",
          excerpt: "This post should display a header image, if the theme supports it. Non-square images can provide some unique styling issues....",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["edge case","featured image","image","layout"],
          id: 75
      })
      
    
      this.add({
          title: "Layout: Header Image and Text Readability",
          excerpt: "This is a sample post with a large feature image1 up top and tons of text. Odio ad blue bottle...",
          categories: ["docs"],
          tags: ["sample post","readability","test"],
          id: 76
      })
      
    
      this.add({
          title: "Layout: Header Image (Vertical)",
          excerpt: "This post should display a header image, if the theme supports it. Non-square images can provide some unique styling issues. This...",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["edge case","featured image","image","layout"],
          id: 77
      })
      
    
      this.add({
          title: "Layout: Header Overlay with Background Fill",
          excerpt: "This post should display a header with a solid background color, if the theme supports it. Non-square images can provide...",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["edge case","image","layout"],
          id: 78
      })
      
    
      this.add({
          title: "Layout: Header Image Overlay",
          excerpt: "This post should display a header with an overlay image, if the theme supports it. Non-square images can provide some...",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["edge case","image","layout"],
          id: 79
      })
      
    
      this.add({
          title: "Layout: More Tag",
          excerpt: "This content is before the excerpt separator tag. Right after this sentence there should be a continue reading link of...",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["content","read more","layout"],
          id: 80
      })
      
    
      this.add({
          title: "Layout: Sidebar Custom",
          excerpt: "This post has a custom sidebar set in the post’s YAML Front Matter. An example of how that YAML could...",
          categories: ["docs"],
          tags: [],
          id: 81
      })
      
    
      this.add({
          title: "Layout: Sidebar with Navigation List",
          excerpt: "This post has a custom navigation list set in the post’s YAML Front Matter. sidebar: title: \"Sample Title\" nav: sidebar-sample...",
          categories: ["docs"],
          tags: [],
          id: 82
      })
      
    
      this.add({
          title: "Layout: Author Override",
          excerpt: "Sites that may have content authored from various individuals can be accommodated by using data files. To attribute an author...",
          categories: ["test"],
          tags: [],
          id: 83
      })
      
    
      this.add({
          title: "Layout: Author Sidebar Disabled",
          excerpt: "This post has the author sidebar disabled.\n\nTo disable add author_profile: false to YAML Front Matter.\n",
          categories: ["test"],
          tags: [],
          id: 84
      })
      
    
      this.add({
          title: "Layout: Header Image (External URL)",
          excerpt: "This post should display a header image, if the theme supports it. Featured image is an external asset and should...",
          categories: ["test","Layout","Uncategorized"],
          tags: ["edge case","featured image","image","layout"],
          id: 85
      })
      
    
      this.add({
          title: "Layout: Header Image (Horizontal)",
          excerpt: "This post should display a header image, if the theme supports it. Non-square images can provide some unique styling issues....",
          categories: ["test","Layout","Uncategorized"],
          tags: ["edge case","featured image","image","layout"],
          id: 86
      })
      
    
      this.add({
          title: "Layout: Header Image and Text Readability",
          excerpt: "This is a sample post with a large feature image1 up top and tons of text. Odio ad blue bottle...",
          categories: ["test"],
          tags: ["sample post","readability","test"],
          id: 87
      })
      
    
      this.add({
          title: "Layout: Header Image (Vertical)",
          excerpt: "This post should display a header image, if the theme supports it. Non-square images can provide some unique styling issues. This...",
          categories: ["test","Layout","Uncategorized"],
          tags: ["edge case","featured image","image","layout"],
          id: 88
      })
      
    
      this.add({
          title: "Layout: Header Overlay with Background Fill",
          excerpt: "This post should display a header with a solid background color, if the theme supports it. Non-square images can provide...",
          categories: ["test","Layout","Uncategorized"],
          tags: ["edge case","image","layout"],
          id: 89
      })
      
    
      this.add({
          title: "Layout: Header Image Overlay",
          excerpt: "This post should display a header with an overlay image, if the theme supports it. Non-square images can provide some...",
          categories: ["test","Layout","Uncategorized"],
          tags: ["edge case","image","layout"],
          id: 90
      })
      
    
      this.add({
          title: "Layout: More Tag",
          excerpt: "This content is before the excerpt separator tag. Right after this sentence there should be a continue reading link of...",
          categories: ["test","Layout","Uncategorized"],
          tags: ["content","read more","layout"],
          id: 91
      })
      
    
      this.add({
          title: "Layout: Sidebar Custom",
          excerpt: "This post has a custom sidebar set in the post’s YAML Front Matter. An example of how that YAML could...",
          categories: ["test"],
          tags: [],
          id: 92
      })
      
    
      this.add({
          title: "Layout: Sidebar with Navigation List",
          excerpt: "This post has a custom navigation list set in the post’s YAML Front Matter. sidebar: title: \"Sample Title\" nav: sidebar-sample...",
          categories: ["test"],
          tags: [],
          id: 93
      })
      
    
      this.add({
          title: "Markup: Text Readability Test",
          excerpt: "Portland in shoreditch Vice, labore typewriter pariatur hoodie fap sartorial Austin. Pinterest literally occupy Schlitz forage. Odio ad blue bottle...",
          categories: ["docs"],
          tags: ["sample post","readability","test"],
          id: 94
      })
      
    
      this.add({
          title: "Markup: Text Readability Test",
          excerpt: "Portland in shoreditch Vice, labore typewriter pariatur hoodie fap sartorial Austin. Pinterest literally occupy Schlitz forage. Odio ad blue bottle...",
          categories: ["test"],
          tags: ["sample post","readability","test"],
          id: 95
      })
      
    
      this.add({
          title: "Markup: Title *with* **Markdown**",
          excerpt: "Verify that: The post title renders the word “with” in italics and the word “Markdown” in bold. The post title...",
          categories: ["docs","Markdown"],
          tags: ["css","html","title"],
          id: 96
      })
      
    
      this.add({
          title: "Markup: Title with Special&nbsp;---&nbsp;Characters",
          excerpt: "Putting special characters in the title should have no adverse effect on the layout or functionality. Special characters in the...",
          categories: ["docs","Markup"],
          tags: ["html","markup","post","title"],
          id: 97
      })
      
    
      this.add({
          title: "Markup: Title *with* **Markdown**",
          excerpt: "Verify that: The post title renders the word “with” in italics and the word “Markdown” in bold. The post title...",
          categories: ["test","Markdown"],
          tags: ["css","html","title"],
          id: 98
      })
      
    
      this.add({
          title: "Markup: Title with Special&nbsp;---&nbsp;Characters",
          excerpt: "Putting special characters in the title should have no adverse effect on the layout or functionality. Special characters in the...",
          categories: ["test","Markup"],
          tags: ["html","markup","post","title"],
          id: 99
      })
      
    
      this.add({
          title: "Markup: Text Alignment",
          excerpt: "Default This is a paragraph. It should not have any alignment of any kind. It should just flow like you...",
          categories: ["docs","Markup"],
          tags: ["alignment","content","css","markup"],
          id: 100
      })
      
    
      this.add({
          title: "Markup: Text Alignment",
          excerpt: "Default This is a paragraph. It should not have any alignment of any kind. It should just flow like you...",
          categories: ["test","Markup"],
          tags: ["alignment","content","css","markup"],
          id: 101
      })
      
    
      this.add({
          title: "Markup: Image Alignment",
          excerpt: "Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is...",
          categories: ["docs","Markup"],
          tags: ["alignment","captions","content","css","image","markup"],
          id: 102
      })
      
    
      this.add({
          title: "Markup: Image Alignment",
          excerpt: "Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is...",
          categories: ["test","Markup"],
          tags: ["alignment","captions","content","css","image","markup"],
          id: 103
      })
      
    
      this.add({
          title: "Markup: HTML Tags and Formatting",
          excerpt: "A variety of common markup showing how the theme styles them. Header two Header three Header four Header five Header...",
          categories: ["docs","Markup"],
          tags: ["content","css","formatting","html","markup"],
          id: 104
      })
      
    
      this.add({
          title: "Markup: HTML Tags and Formatting",
          excerpt: "A variety of common markup showing how the theme styles them. Header two Header three Header four Header five Header...",
          categories: ["test","Markup"],
          tags: ["content","css","formatting","html","markup"],
          id: 105
      })
      
    
      this.add({
          title: "Markup: Another Post with Images",
          excerpt: "Here are some examples of what a post with images might look like. If you want to display two or...",
          categories: ["docs"],
          tags: ["sample post","images","test"],
          id: 106
      })
      
    
      this.add({
          title: "Markup: Another Post with Images",
          excerpt: "Here are some examples of what a post with images might look like. If you want to display two or...",
          categories: ["test"],
          tags: ["sample post","images","test"],
          id: 107
      })
      
    
      this.add({
          title: "Markup: Syntax Highlighting",
          excerpt: "Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms....",
          categories: ["docs"],
          tags: ["code","syntax highlighting"],
          id: 108
      })
      
    
      this.add({
          title: "Markup: Syntax Highlighting",
          excerpt: "Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms....",
          categories: ["test"],
          tags: ["code","syntax highlighting"],
          id: 109
      })
      
    
      this.add({
          title: "Welcome to Jekyll!",
          excerpt: "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your...",
          categories: ["docs","Jekyll"],
          tags: ["update"],
          id: 110
      })
      
    
      this.add({
          title: "Welcome to Jekyll!",
          excerpt: "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your...",
          categories: ["test","Jekyll"],
          tags: ["update"],
          id: 111
      })
      
    
      this.add({
          title: "Gemified Theme -- Alpha Release",
          excerpt: "Jekyll themes distributed as Ruby gems are finally here to make installing and upgrading much easier. Gone are the days...",
          categories: ["docs","Jekyll"],
          tags: ["update"],
          id: 112
      })
      
    
      this.add({
          title: "Gemified Theme -- Beta Release",
          excerpt: "Hot on the heels of Jekyll v3.3.0 is a beta release of Minimal Mistakes… as a gemified theme. minimal-mistakes-jekyll can...",
          categories: ["docs","Jekyll"],
          tags: ["update"],
          id: 113
      })
      
    
      this.add({
          title: "Layout: Header Video",
          excerpt: "This post should display a header with a responsive video, if the theme supports it. Settings Parameter Required Description id...",
          categories: ["docs","Layout","Uncategorized"],
          tags: ["video","layout"],
          id: 114
      })
      
    
      this.add({
          title: "Layout: Header Video",
          excerpt: "This post should display a header with a responsive video, if the theme supports it. Settings Parameter Required Description id...",
          categories: ["test","Layout","Uncategorized"],
          tags: ["video","layout"],
          id: 115
      })
      
    
  
});

console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Edge Case: Nested and Mixed Lists",
        "url": "http://localhost:4000/docs/edge%20case/2009/05/15/edge-case-nested-and-mixed-lists.html",
        "excerpt": "Nested and mixed lists are an interesting beast. It’s a corner case to make sure that Lists within lists do...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Edge Case: Nested and Mixed Lists",
        "url": "http://localhost:4000/test/edge%20case/2009/05/15/edge-case-nested-and-mixed-lists.html",
        "excerpt": "Nested and mixed lists are an interesting beast. It’s a corner case to make sure that Lists within lists do...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Edge Case: Many Tags",
        "url": "http://localhost:4000/docs/edge%20case/2009/06/01/edge-case-many-tags.html",
        "excerpt": "This post has many tags.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Edge Case: Many Tags",
        "url": "http://localhost:4000/test/edge%20case/2009/06/01/edge-case-many-tags.html",
        "excerpt": "This post has many tags.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Edge Case: Many Categories",
        "url": "http://localhost:4000/docs/aciform/antiquarianism/arrangement/asmodeus/broder/buying/championship/chastening/disinclination/disinfection/dispatch/echappee/enphagy/2009/07/02/edge-case-many-categories.html",
        "excerpt": "This post has many categories.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Edge Case: Many Categories",
        "url": "http://localhost:4000/test/aciform/antiquarianism/arrangement/asmodeus/broder/buying/championship/chastening/disinclination/disinfection/dispatch/echappee/enphagy/2009/07/02/edge-case-many-categories.html",
        "excerpt": "This post has many categories.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Edge Case: No Body Content",
        "url": "http://localhost:4000/docs/edge%20case/2009/08/06/edge-case-no-body-content.html",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Edge Case: No Body Content",
        "url": "http://localhost:4000/test/edge%20case/2009/08/06/edge-case-no-body-content.html",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Edge Case No Yaml Title",
        "url": "http://localhost:4000/docs/edge%20case/2009/09/05/edge-case-no-yaml-title.html",
        "excerpt": "This post has no title specified in the YAML Front Matter. Jekyll should auto-generate a title from the filename.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Edge Case No Yaml Title",
        "url": "http://localhost:4000/test/edge%20case/2009/09/05/edge-case-no-yaml-title.html",
        "excerpt": "This post has no title specified in the YAML Front Matter. Jekyll should auto-generate a title from the filename.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Antidisestablishmentarianism",
        "url": "http://localhost:4000/docs/edge%20case/2009/10/05/edge-case-title-should-not-overflow-the-content-area.html",
        "excerpt": "Title should not overflow the content area A few things to check for: Non-breaking text in the title, content, and...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his diebus? Quisque semper aliquid videtur, in volutpat mauris. Nolo enim dicere. Vobis neque ab aliis. Ego feci memetipsum explicans. Gus mortuus est. Lorem opus habeo. Jackson Isai? Tu quoque ... A te quidem a ante. Vos scitis quod blinking res Ive 'been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et ... sunt occid",
        "url": "http://localhost:4000/docs/edge%20case/2009/10/05/edge-case-very-long-title.html",
        "excerpt": "Check for long titles and how they might break a template.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Antidisestablishmentarianism",
        "url": "http://localhost:4000/test/edge%20case/2009/10/05/edge-case-title-should-not-overflow-the-content-area.html",
        "excerpt": "Title should not overflow the content area A few things to check for: Non-breaking text in the title, content, and...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his diebus? Quisque semper aliquid videtur, in volutpat mauris. Nolo enim dicere. Vobis neque ab aliis. Ego feci memetipsum explicans. Gus mortuus est. Lorem opus habeo. Jackson Isai? Tu quoque ... A te quidem a ante. Vos scitis quod blinking res Ive 'been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et ... sunt occid",
        "url": "http://localhost:4000/test/edge%20case/2009/10/05/edge-case-very-long-title.html",
        "excerpt": "Check for long titles and how they might break a template.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Modified Date",
        "url": "http://localhost:4000/docs/post%20formats/2010/01/07/post-modified.html",
        "excerpt": "This post has been updated and should show a modified date if used in a layout. All children, except one,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Standard",
        "url": "http://localhost:4000/docs/post%20formats/2010/01/07/post-standard.html",
        "excerpt": "All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Modified Date",
        "url": "http://localhost:4000/test/post%20formats/2010/01/07/post-modified.html",
        "excerpt": "This post has been updated and should show a modified date if used in a layout. All children, except one,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Standard",
        "url": "http://localhost:4000/test/post%20formats/2010/01/07/post-standard.html",
        "excerpt": "All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Chat",
        "url": "http://localhost:4000/docs/post%20formats/2010/01/08/post-chat.html",
        "excerpt": "Abbott: Strange as it may seem, they give ball players nowadays very peculiar names. Costello: Funny names? Abbott: Nicknames, nicknames....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Chat",
        "url": "http://localhost:4000/test/post%20formats/2010/01/08/post-chat.html",
        "excerpt": "Abbott: Strange as it may seem, they give ball players nowadays very peculiar names. Costello: Funny names? Abbott: Nicknames, nicknames....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Notice",
        "url": "http://localhost:4000/docs/post%20formats/2010/02/05/post-notice.html",
        "excerpt": "A notice displays information that explains nearby content. Often used to call attention to a particular detail. When using Kramdown...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Quote",
        "url": "http://localhost:4000/docs/post%20formats/2010/02/05/post-quote.html",
        "excerpt": "Only one thing is impossible for God: To find any sense in any copyright law on the planet. Mark Twain...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Notice",
        "url": "http://localhost:4000/test/post%20formats/2010/02/05/post-notice.html",
        "excerpt": "A notice displays information that explains nearby content. Often used to call attention to a particular detail. When using Kramdown...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Quote",
        "url": "http://localhost:4000/test/post%20formats/2010/02/05/post-quote.html",
        "excerpt": "Only one thing is impossible for God: To find any sense in any copyright law on the planet. Mark Twain...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Link",
        "url": "http://localhost:4000/docs/post%20formats/2010/03/07/post-link.html",
        "excerpt": "This theme supports link posts, made famous by John Gruber. To use, just add link: http://url-you-want-linked to the post’s YAML...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Link",
        "url": "http://localhost:4000/test/post%20formats/2010/03/07/post-link.html",
        "excerpt": "This theme supports link posts, made famous by John Gruber. To use, just add link: http://url-you-want-linked to the post’s YAML...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Video (YouTube)",
        "url": "http://localhost:4000/docs/post%20formats/2010/06/02/post-video-youtube.html",
        "excerpt": "YouTube video embed below.\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Video (YouTube)",
        "url": "http://localhost:4000/test/post%20formats/2010/06/02/post-video-youtube.html",
        "excerpt": "YouTube video embed below.\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Header Image with OpenGraph Override",
        "url": "http://localhost:4000/docs/layout/uncategorized/2010/08/05/post-header-image-og-override.html",
        "excerpt": "This post has a header image with an OpenGraph override.\n\nheader:\n  image: /assets/images/page-header-image.png\n  og_image: /assets/images/page-header-og-image.png\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Overlay Image with OpenGraph Override",
        "url": "http://localhost:4000/docs/layout/uncategorized/2010/08/05/post-header-overlay-image-og-override.html",
        "excerpt": "This post has a header image with an OpenGraph override. header: overlay_image: /assets/images/unsplash-image-1.jpg og_image: /assets/images/page-header-og-image.png caption: \"Photo credit: [**Unsplash**](https://unsplash.com)\" cta_url:...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Image (with Link)",
        "url": "http://localhost:4000/docs/post%20formats/2010/08/05/post-image-linked.html",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Image (Standard)",
        "url": "http://localhost:4000/docs/post%20formats/2010/08/05/post-image-standard.html",
        "excerpt": "The preferred way of using images is placing them in the /assets/images/ directory and referencing them with an absolute path....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Teaser Image with OpenGraph Override",
        "url": "http://localhost:4000/docs/layout/uncategorized/2010/08/05/post-teaser-image-og-override.html",
        "excerpt": "This post has a teaser image with an OpenGraph override.\n\nheader:\n  teaser: /assets/images/page-header-teaser.png\n  og_image: /assets/images/page-header-og-image.png\n\n",
        "teaser":
          
            "http://localhost:4000/assets/images/page-header-teaser.png"
          
      },
    
      
      {
        "title": "Post: Header Image with OpenGraph Override",
        "url": "http://localhost:4000/test/layout/uncategorized/2010/08/05/post-header-image-og-override.html",
        "excerpt": "This post has a header image with an OpenGraph override.\n\nheader:\n  image: /assets/images/page-header-image.png\n  og_image: /assets/images/page-header-og-image.png\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Overlay Image with OpenGraph Override",
        "url": "http://localhost:4000/test/layout/uncategorized/2010/08/05/post-header-overlay-image-og-override.html",
        "excerpt": "This post has a header image with an OpenGraph override. header: overlay_image: /assets/images/unsplash-image-1.jpg og_image: /assets/images/page-header-og-image.png caption: \"Photo credit: [**Unsplash**](https://unsplash.com)\" cta_url:...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Image (with Link)",
        "url": "http://localhost:4000/test/post%20formats/2010/08/05/post-image-linked.html",
        "excerpt": "\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Image (Standard)",
        "url": "http://localhost:4000/test/post%20formats/2010/08/05/post-image-standard.html",
        "excerpt": "The preferred way of using images is placing them in the /assets/images/ directory and referencing them with an absolute path....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Teaser Image with OpenGraph Override",
        "url": "http://localhost:4000/test/layout/uncategorized/2010/08/05/post-teaser-image-og-override.html",
        "excerpt": "This post has a teaser image with an OpenGraph override.\n\nheader:\n  teaser: /assets/images/page-header-teaser.png\n  og_image: /assets/images/page-header-og-image.png\n\n",
        "teaser":
          
            "http://localhost:4000/assets/images/page-header-teaser.png"
          
      },
    
      
      {
        "title": "Post: Image (Linked with Caption)",
        "url": "http://localhost:4000/docs/post%20formats/2010/08/06/post-image-linked-caption.html",
        "excerpt": "\n\n  \n\n\n  \nStairs? Were we’re going we don’t need no stairs.\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Image (Linked with Caption)",
        "url": "http://localhost:4000/test/post%20formats/2010/08/06/post-image-linked-caption.html",
        "excerpt": "\n\n  \n\n\n  \nStairs? Were we’re going we don’t need no stairs.\n\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Image (Caption)",
        "url": "http://localhost:4000/docs/post%20formats/2010/08/07/post-image-caption.html",
        "excerpt": "\n\n  \n\n\n  Photo from Unsplash.\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Image (Caption)",
        "url": "http://localhost:4000/test/post%20formats/2010/08/07/post-image-caption.html",
        "excerpt": "\n\n  \n\n\n  Photo from Unsplash.\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Gallery",
        "url": "http://localhost:4000/docs/post%20formats/2010/09/09/post-gallery.html",
        "excerpt": "These are gallery tests for image wrapped in &lt;figure&gt; elements. To place a gallery add the necessary YAML Front Matter:...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Gallery",
        "url": "http://localhost:4000/test/post%20formats/2010/09/09/post-gallery.html",
        "excerpt": "These are gallery tests for image wrapped in &lt;figure&gt; elements. To place a gallery add the necessary YAML Front Matter:...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Twitter Embed",
        "url": "http://localhost:4000/docs/media/2010/09/10/post-twitter-embeds.html",
        "excerpt": "🎨 Finally got around to adding all my @procreateapp creations with time lapse videos https://t.co/1nNbkefC3L pic.twitter.com/gcNLJoJ0Gn&mdash; Michael Rose (@mmistakes) November...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Post: Twitter Embed",
        "url": "http://localhost:4000/test/media/2010/09/10/post-twitter-embeds.html",
        "excerpt": "🎨 Finally got around to adding all my @procreateapp creations with time lapse videos https://t.co/1nNbkefC3L pic.twitter.com/gcNLJoJ0Gn&mdash; Michael Rose (@mmistakes) November...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Comments Disabled",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/01/02/layout-comments-disabled.html",
        "excerpt": "This post has its comments disabled.\n\nThere should be no comment form.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Comments Enabled",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/01/02/layout-comments.html",
        "excerpt": "This post should display comments.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Read Time Disabled",
        "url": "http://localhost:4000/docs/2012/01/02/layout-read-time-disabled.html",
        "excerpt": "This post has reading time disabled. The estimated time that it takes to read this post should not be showing...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Read Time Enabled",
        "url": "http://localhost:4000/docs/2012/01/02/layout-read-time.html",
        "excerpt": "This post has reading time enabled. The estimated time that it takes to read this post should show if also...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Related Posts Disabled",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/01/02/layout-related-posts-disabled.html",
        "excerpt": "This post has related posts disabled.\n\nRelated post links should not appear.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Related Posts Enabled",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/01/02/layout-related-posts.html",
        "excerpt": "This post has related posts enabled.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Social Sharing Links Disabled",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/01/02/layout-sharing-disabled.html",
        "excerpt": "This post has social sharing disabled.\n\nSocial sharing links should not appear.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Social Sharing Links Enabled",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/01/02/layout-sharing.html",
        "excerpt": "This post should display social sharing links.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Comments Disabled",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/01/02/layout-comments-disabled.html",
        "excerpt": "This post has its comments disabled.\n\nThere should be no comment form.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Comments Enabled",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/01/02/layout-comments.html",
        "excerpt": "This post should display comments.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Read Time Disabled",
        "url": "http://localhost:4000/test/2012/01/02/layout-read-time-disabled.html",
        "excerpt": "This post has reading time disabled. The estimated time that it takes to read this post should not be showing...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Read Time Enabled",
        "url": "http://localhost:4000/test/2012/01/02/layout-read-time.html",
        "excerpt": "This post has reading time enabled. The estimated time that it takes to read this post should show if also...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Related Posts Disabled",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/01/02/layout-related-posts-disabled.html",
        "excerpt": "This post has related posts disabled.\n\nRelated post links should not appear.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Related Posts Enabled",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/01/02/layout-related-posts.html",
        "excerpt": "This post has related posts enabled.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Social Sharing Links Disabled",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/01/02/layout-sharing-disabled.html",
        "excerpt": "This post has social sharing disabled.\n\nSocial sharing links should not appear.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Social Sharing Links Enabled",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/01/02/layout-sharing.html",
        "excerpt": "This post should display social sharing links.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Reading Time, Comments, Social Sharing Links, and Related Posts Disabled",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/01/03/layout-read-time-comments-sharing-related-posts-disabled.html",
        "excerpt": "This post has reading time, comments, social sharing links, and related posts disabled. Reading time, comments, social sharing and related...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Post with Table Of Contents",
        "url": "http://localhost:4000/docs/2012/01/03/layout-table-of-contents-post.html",
        "excerpt": "Enable table of contents on post or page by adding toc: true to its YAML Front Matter. The title and...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Reading Time, Comments, Social Sharing Links, and Related Posts Disabled",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/01/03/layout-read-time-comments-sharing-related-posts-disabled.html",
        "excerpt": "This post has reading time, comments, social sharing links, and related posts disabled. Reading time, comments, social sharing and related...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Post with Table Of Contents",
        "url": "http://localhost:4000/test/2012/01/03/layout-table-of-contents-post.html",
        "excerpt": "Enable table of contents on post or page by adding toc: true to its YAML Front Matter. The title and...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Code Excerpt (Generated)",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/03/14/layout-code-excerpt-generated.html",
        "excerpt": "This is the post content with inline code, (e.g. &lt;span style=\"color: red;\"&gt;red&lt;/span&gt;. It should be displayed in place of the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Excerpt (Defined)",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/03/14/layout-excerpt-defined.html",
        "excerpt": "This is the post content. It should be displayed in place of the user-defined excerpt in archive-index pages. This paragraph...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Excerpt (Generated)",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/03/14/layout-excerpt-generated.html",
        "excerpt": "This is the post content. Archive-index pages should display an auto-generated excerpt of this content. Be sure to test the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Code Excerpt (Generated)",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/03/14/layout-code-excerpt-generated.html",
        "excerpt": "This is the post content with inline code, (e.g. &lt;span style=\"color: red;\"&gt;red&lt;/span&gt;. It should be displayed in place of the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Excerpt (Defined)",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/03/14/layout-excerpt-defined.html",
        "excerpt": "This is the post content. It should be displayed in place of the user-defined excerpt in archive-index pages. This paragraph...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Excerpt (Generated)",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/03/14/layout-excerpt-generated.html",
        "excerpt": "This is the post content. Archive-index pages should display an auto-generated excerpt of this content. Be sure to test the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Author Override",
        "url": "http://localhost:4000/docs/2012/03/15/layout-author-override.html",
        "excerpt": "Sites that may have content authored from various individuals can be accommodated by using data files. To attribute an author...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Author Sidebar Disabled",
        "url": "http://localhost:4000/docs/2012/03/15/layout-author-sidebar-disabled.html",
        "excerpt": "This post has the author sidebar disabled.\n\nTo disable add author_profile: false to YAML Front Matter.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image (External URL)",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/03/15/layout-header-image-external.html",
        "excerpt": "This post should display a header image, if the theme supports it. Featured image is an external asset and should...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image (Horizontal)",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/03/15/layout-header-image-horizontal.html",
        "excerpt": "This post should display a header image, if the theme supports it. Non-square images can provide some unique styling issues....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image and Text Readability",
        "url": "http://localhost:4000/docs/2012/03/15/layout-header-image-text-readability.html",
        "excerpt": "This is a sample post with a large feature image1 up top and tons of text. Odio ad blue bottle...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image (Vertical)",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/03/15/layout-header-image-vertical.html",
        "excerpt": "This post should display a header image, if the theme supports it. Non-square images can provide some unique styling issues. This...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Overlay with Background Fill",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/03/15/layout-header-overlay-color.html",
        "excerpt": "This post should display a header with a solid background color, if the theme supports it. Non-square images can provide...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image Overlay",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/03/15/layout-header-overlay-image.html",
        "excerpt": "This post should display a header with an overlay image, if the theme supports it. Non-square images can provide some...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: More Tag",
        "url": "http://localhost:4000/docs/layout/uncategorized/2012/03/15/layout-more-tag.html",
        "excerpt": "This content is before the excerpt separator tag. Right after this sentence there should be a continue reading link of...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Sidebar Custom",
        "url": "http://localhost:4000/docs/2012/03/15/layout-sidebar-custom.html",
        "excerpt": "This post has a custom sidebar set in the post’s YAML Front Matter. An example of how that YAML could...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Sidebar with Navigation List",
        "url": "http://localhost:4000/docs/2012/03/15/layout-sidebar-nav-list.html",
        "excerpt": "This post has a custom navigation list set in the post’s YAML Front Matter. sidebar: title: \"Sample Title\" nav: sidebar-sample...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Author Override",
        "url": "http://localhost:4000/test/2012/03/15/layout-author-override.html",
        "excerpt": "Sites that may have content authored from various individuals can be accommodated by using data files. To attribute an author...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Author Sidebar Disabled",
        "url": "http://localhost:4000/test/2012/03/15/layout-author-sidebar-disabled.html",
        "excerpt": "This post has the author sidebar disabled.\n\nTo disable add author_profile: false to YAML Front Matter.\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image (External URL)",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/03/15/layout-header-image-external.html",
        "excerpt": "This post should display a header image, if the theme supports it. Featured image is an external asset and should...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image (Horizontal)",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/03/15/layout-header-image-horizontal.html",
        "excerpt": "This post should display a header image, if the theme supports it. Non-square images can provide some unique styling issues....",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image and Text Readability",
        "url": "http://localhost:4000/test/2012/03/15/layout-header-image-text-readability.html",
        "excerpt": "This is a sample post with a large feature image1 up top and tons of text. Odio ad blue bottle...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image (Vertical)",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/03/15/layout-header-image-vertical.html",
        "excerpt": "This post should display a header image, if the theme supports it. Non-square images can provide some unique styling issues. This...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Overlay with Background Fill",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/03/15/layout-header-overlay-color.html",
        "excerpt": "This post should display a header with a solid background color, if the theme supports it. Non-square images can provide...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Image Overlay",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/03/15/layout-header-overlay-image.html",
        "excerpt": "This post should display a header with an overlay image, if the theme supports it. Non-square images can provide some...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: More Tag",
        "url": "http://localhost:4000/test/layout/uncategorized/2012/03/15/layout-more-tag.html",
        "excerpt": "This content is before the excerpt separator tag. Right after this sentence there should be a continue reading link of...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Sidebar Custom",
        "url": "http://localhost:4000/test/2012/03/15/layout-sidebar-custom.html",
        "excerpt": "This post has a custom sidebar set in the post’s YAML Front Matter. An example of how that YAML could...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Sidebar with Navigation List",
        "url": "http://localhost:4000/test/2012/03/15/layout-sidebar-nav-list.html",
        "excerpt": "This post has a custom navigation list set in the post’s YAML Front Matter. sidebar: title: \"Sample Title\" nav: sidebar-sample...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Text Readability Test",
        "url": "http://localhost:4000/docs/2012/05/22/markup-text-readability.html",
        "excerpt": "Portland in shoreditch Vice, labore typewriter pariatur hoodie fap sartorial Austin. Pinterest literally occupy Schlitz forage. Odio ad blue bottle...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Text Readability Test",
        "url": "http://localhost:4000/test/2012/05/22/markup-text-readability.html",
        "excerpt": "Portland in shoreditch Vice, labore typewriter pariatur hoodie fap sartorial Austin. Pinterest literally occupy Schlitz forage. Odio ad blue bottle...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Title *with* **Markdown**",
        "url": "http://localhost:4000/docs/markdown/2013/01/05/markup-title-with-markup.html",
        "excerpt": "Verify that: The post title renders the word “with” in italics and the word “Markdown” in bold. The post title...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Title with Special&nbsp;---&nbsp;Characters",
        "url": "http://localhost:4000/docs/markup/2013/01/05/markup-title-with-special-characters.html",
        "excerpt": "Putting special characters in the title should have no adverse effect on the layout or functionality. Special characters in the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Title *with* **Markdown**",
        "url": "http://localhost:4000/test/markdown/2013/01/05/markup-title-with-markup.html",
        "excerpt": "Verify that: The post title renders the word “with” in italics and the word “Markdown” in bold. The post title...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Title with Special&nbsp;---&nbsp;Characters",
        "url": "http://localhost:4000/test/markup/2013/01/05/markup-title-with-special-characters.html",
        "excerpt": "Putting special characters in the title should have no adverse effect on the layout or functionality. Special characters in the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Text Alignment",
        "url": "http://localhost:4000/docs/markup/2013/01/09/markup-text-alignment.html",
        "excerpt": "Default This is a paragraph. It should not have any alignment of any kind. It should just flow like you...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Text Alignment",
        "url": "http://localhost:4000/test/markup/2013/01/09/markup-text-alignment.html",
        "excerpt": "Default This is a paragraph. It should not have any alignment of any kind. It should just flow like you...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Image Alignment",
        "url": "http://localhost:4000/docs/markup/2013/01/10/markup-image-alignment.html",
        "excerpt": "Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: Image Alignment",
        "url": "http://localhost:4000/test/markup/2013/01/10/markup-image-alignment.html",
        "excerpt": "Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Markup: HTML Tags and Formatting",
        "url": "http://localhost:4000/docs/markup/2013/01/11/markup-html-tags-and-formatting.html",
        "excerpt": "A variety of common markup showing how the theme styles them. Header two Header three Header four Header five Header...",
        "teaser":
          
            "http://localhost:4000/assets/images/markup-syntax-highlighting-teaser.jpg"
          
      },
    
      
      {
        "title": "Markup: HTML Tags and Formatting",
        "url": "http://localhost:4000/test/markup/2013/01/11/markup-html-tags-and-formatting.html",
        "excerpt": "A variety of common markup showing how the theme styles them. Header two Header three Header four Header five Header...",
        "teaser":
          
            "http://localhost:4000/assets/images/markup-syntax-highlighting-teaser.jpg"
          
      },
    
      
      {
        "title": "Markup: Another Post with Images",
        "url": "http://localhost:4000/docs/2013/05/22/markup-more-images.html",
        "excerpt": "Here are some examples of what a post with images might look like. If you want to display two or...",
        "teaser":
          
            "http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg"
          
      },
    
      
      {
        "title": "Markup: Another Post with Images",
        "url": "http://localhost:4000/test/2013/05/22/markup-more-images.html",
        "excerpt": "Here are some examples of what a post with images might look like. If you want to display two or...",
        "teaser":
          
            "http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg"
          
      },
    
      
      {
        "title": "Markup: Syntax Highlighting",
        "url": "http://localhost:4000/docs/2013/08/16/markup-syntax-highlighting.html",
        "excerpt": "Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms....",
        "teaser":
          
            "http://localhost:4000/assets/images/markup-syntax-highlighting-teaser.jpg"
          
      },
    
      
      {
        "title": "Markup: Syntax Highlighting",
        "url": "http://localhost:4000/test/2013/08/16/markup-syntax-highlighting.html",
        "excerpt": "Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms....",
        "teaser":
          
            "http://localhost:4000/assets/images/markup-syntax-highlighting-teaser.jpg"
          
      },
    
      
      {
        "title": "Welcome to Jekyll!",
        "url": "http://localhost:4000/docs/jekyll/2016/02/24/welcome-to-jekyll.html",
        "excerpt": "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your...",
        "teaser":
          
            "https://farm5.staticflickr.com/4076/4940499208_b79b77fb0a_z.jpg"
          
      },
    
      
      {
        "title": "Welcome to Jekyll!",
        "url": "http://localhost:4000/test/jekyll/2016/02/24/welcome-to-jekyll.html",
        "excerpt": "You’ll find this post in your _posts directory. Go ahead and edit it and re-build the site to see your...",
        "teaser":
          
            "https://farm5.staticflickr.com/4076/4940499208_b79b77fb0a_z.jpg"
          
      },
    
      
      {
        "title": "Gemified Theme -- Alpha Release",
        "url": "http://localhost:4000/docs/jekyll/2016/09/21/gemified-theme-alpha.html",
        "excerpt": "Jekyll themes distributed as Ruby gems are finally here to make installing and upgrading much easier. Gone are the days...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Gemified Theme -- Beta Release",
        "url": "http://localhost:4000/docs/jekyll/2016/10/06/gemified-theme-beta.html",
        "excerpt": "Hot on the heels of Jekyll v3.3.0 is a beta release of Minimal Mistakes… as a gemified theme. minimal-mistakes-jekyll can...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Video",
        "url": "http://localhost:4000/docs/layout/uncategorized/2017/01/23/layout-header-video.html",
        "excerpt": "This post should display a header with a responsive video, if the theme supports it. Settings Parameter Required Description id...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Layout: Header Video",
        "url": "http://localhost:4000/test/layout/uncategorized/2017/01/23/layout-header-video.html",
        "excerpt": "This post should display a header with a responsive video, if the theme supports it. Settings Parameter Required Description id...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase().replace(":", "");
    var result =
      idx.query(function (q) {
        query.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, {  boost: 100 })
          if(query.lastIndexOf(" ") != query.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
