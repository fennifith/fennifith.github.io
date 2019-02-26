---
layout: "project"
type: "undefined"
title: "rgocal/Material_PopUp_Menu"
description: "A nostalgic dialog action menu from Android 2.3 re-invented for Material Design"
repo: "fennifith/Material_PopUp_Menu"
git: "git://github.com/fennifith/Material_PopUp_Menu.git"
links: 
  - name: "GitHub"
    url: "https://github.com/fennifith/Material_PopUp_Menu"
    icon: "https://github.com/favicon.ico"
  - name: "Issues"
    url: "https://github.com/fennifith/Material_PopUp_Menu/issues"
    icon: "/images/ic/bug.svg"
contributors: 
  - login: "rgocal"
    avatar: "https://avatars3.githubusercontent.com/u/2482221?v=4"
    url: "https://github.com/rgocal"
languages: 
  - "Java"
isDocs: "false"
isWiki: "false"
pushed: "2019-02-13T19:11:14Z"
---

# Material_PopUp_Menu
A nostalgic dialog action menu from Android 2.3 re-invented for Material Design. This popup menu was originally used in ADW Launcher from CM7. I wanted something nostalgic to return in Sapphyx Launcher and came up with this rather simple library that can be used for a number of things. Very useful in listview or recyclerview long click popups. I am seeking some help from material design devs to make it look even more cleaner. If you want to contribute, theirs a todo list at the bottom! Material Popup was originally built for my Launcher Project Sapphyx but alot of my users liked the idea of it returning, So I extracted it as a library. Enjoy! 

Preview Image
https://www.instagram.com/p/BqbFtOLAUOT/?utm_source=ig_web_copy_link

#Getting Setup!

	allprojects {
		repositories {
			...
			maven { url 'https://jitpack.io' }
		}
	}
  
  	dependencies {
			implementation 'com.github.rgocal:Material_PopUp_Menu:v1.10.2'
	}
  
  #Add Color Strings (optional)
  
  add these color strings to your project only if you plan to set the colors to the popup via xml and not via code
  <!--The body color is the top and bottom headers and the arrow color -->
    <color name="popup_body_color">@android:color/holo_blue_dark</color>
    <!--The scrim color is the scrollbar color if enabled -->
    <color name="popup_scrim_color">@android:color/holo_blue_dark</color>
    <!--The scroll color is the background menu color -->
    <color name="popup_scroll_color">@android:color/holo_blue_dark</color>
    <!--The track color is the menu left and right dividers, set to the same color as the scroll color to disable -->
    <color name="popup_track_color">@android:color/holo_blue_dark</color>
    
    
  #Keeping It Simple

Add some Action Items you will want in your menu. Each action requires an ID, a Title, and a Resource. The ID represents the position of the item. You can set boolean toggles to these IDs to programically hide them if you wish to add customization to your menu.

	final ActionItem dummyOne = new ActionItem(1, "Dummy 1", getResources().getDrawable(R.drawable.ic_settings));
        final ActionItem dummyTwo = new ActionItem(2, "Dummy 2", getResources().getDrawable(R.drawable.ic_settings));
        final ActionItem dummyThree = new ActionItem(3, "Dummy 3", getResources().getDrawable(R.drawable.ic_settings));
	
Make them Stick or UnSticky. Making them Sticky means after clicking the option, the menu is still popped up. If they are UnSticky, The menu will dismiss after the item has been clicked.

	dummyOne.setSticky(true);
        dummyTwo.setSticky(true);
        dummyThree.setSticky(false);
	
Initialize the Popup Menu

	final PopUpMenu mQuickAction = new PopUpMenu(context);
		
Modify the Menu to your liking. Set animate track to true if you would like to see it bounce into place. Set light theme to true if you want light icons vs dark icons. Set scrollbar enabled if you want to see a scrollbar in the menu since its a horizontal menu. Anim Style has 4 variations, check out the source code of the library to decide what you want or set it to 4 for the sysytem to decide on its own. Set titles to true if you want your items to have titles under their icons. Set tracks to true if you wish to have a container track interface. Enable Menu Title or Menu SubTitle if you'd like your menu to have Titles. The subTitle can be set to have a click listener as well! Do not exceed the menu legth with your Strings or your menu's margin position will be off.

        mQuickAction.mAnimateTrack(true);
        mQuickAction.setLightTheme(true);
        mQuickAction.setScrollBar(false);
        mQuickAction.setAnimStyle(4);
        mQuickAction.setHasTitles(true);
	mQuickAction.setEnableTracks(true);
	
        mQuickAction.hasSubTitle(true);
        String menuTitle = "Menu Title";
        mQuickAction.setMenuTitle(menuTitle);
	
        mQuickAction.hasSubTitle(true);
        String menuSubTitle = "Menu SubTitle";
        mQuickAction.setSubMenuTitle(menuSubTitle);
        mQuickAction.setSubTitleOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(MainActivity.this, "This is pretty cool", Toast.LENGTH_SHORT).show();
            }
        });
	
Programically set colors to views. Scroll color is the background menu color. Track colors are divider colors on Start and End. Body color is the frame and arrow of the menu.

	mQuickAction.setScrollColor(R.color.orange);
        mQuickAction.setTrackColor(R.color.orange);
        mQuickAction.setBodyColor(R.color.orange);
	
Add your items your created up top to your menu. This is where you can set boolean if statements to the IDs if you want to toggle them in your menu for customization.

	mQuickAction.addActionItem(dummyOne);
        mQuickAction.addActionItem(dummyTwo);
        mQuickAction.addActionItem(dummyThree);
	
Set a click listener for each item.

	mQuickAction.setOnActionItemClickListener(new PopUpMenu.OnActionItemClickListener() {
            @Override
            public void onItemClick(PopUpMenu source, int pos, int actionId) {
                if (actionId == 1) {
                    Toast.makeText(context, messageOne, Toast.LENGTH_SHORT).show();
                }
                if (actionId == 2) {
                    Toast.makeText(context, messageTwo, Toast.LENGTH_SHORT).show();

                }
                if (actionId == 3) {
                    Toast.makeText(context, messageThree, Toast.LENGTH_SHORT).show();
                }
            }
        });
	
Want a dimiss listener for whatever reason?

	mQuickAction.setOnDismissListener(new PopUpMenu.OnDismissListener() {
            @Override
            public void onDismiss() {
                Toast.makeText(getBaseContext(), "Dismissed!", Toast.LENGTH_SHORT).show();
            }
        });

Popup Menu Shouldn't be used in all menu cases. The most helpfull cases are on listviews or individual menu cases on recyclerview items. Popup Menu was originally used in ADW Launcher to supply menu actions to app shortcuts, now we have shortcut popups bubbles from Pixel Launcher. Let's not let a good menu die off. Let it live and be used. If it works, don't mess with it.

#ToDo List
- Badge Support for Action Items
- Vertical Orientation mode? 
