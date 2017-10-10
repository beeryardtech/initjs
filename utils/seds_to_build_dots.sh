#!/bin/bash

# Generator snippet
# for x in `find $(pwd) -maxdepth 1 -type f | sort` ; do 
#     r=$( echo $x | sed 's!/home/tgoldie!~!' ) 
#     echo "sed -i '0,#%l#s##${r}#' \${p}"  | sed 's!/!\\/!g' | sed 's!#!/!g'
# done

# Then, in VIM ->
# :%s!/!\\/!g
# :%s!#!/!g

p=~/initjs/src/configs/dots.core.js

sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_bash_aliases.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_bash_beeryardstc.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_bash_beeryardvirt.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_bash_chrome.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_bash_funcs.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_bash_logout.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_bash_ps1.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_bashrc.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_gitconfig.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_gntrc.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_gvimrc.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_inputrc.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_mailcap.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_muttrc.config.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_muttrc.steeleye.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_muttrc.tgoldie.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_NERDTreeBookmarks.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_profile.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_tmux.conf.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_vimrc.config.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_vimrc.funcs.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_vimrc.js.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_vimrc.plugins.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_vimrc.python.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_vimrc.simple.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_vimrc.txt/' ${p}



# Generator snippet
#for x in `find $(pwd) -maxdepth 1 -type f | sort` ; do 
    #r=$(basename $x | sed 's!_!.!' | sed 's!.txt!!' | awk '{print "~/"$1}' )
    #echo "sed -i '0,#%t#s##${r}#' \${p}" | sed 's!/!\\/!g' | sed 's!#!/!g'
#done


sed -i '0,/%t/s//~\/.bash_aliases/' ${p}
sed -i '0,/%t/s//~\/.bash_beeryardstc/' ${p}
sed -i '0,/%t/s//~\/.bash_beeryardvirt/' ${p}
sed -i '0,/%t/s//~\/.bash_chrome/' ${p}
sed -i '0,/%t/s//~\/.bash_funcs/' ${p}
sed -i '0,/%t/s//~\/.bash_logout/' ${p}
sed -i '0,/%t/s//~\/.bash_ps1/' ${p}
sed -i '0,/%t/s//~\/.bashrc/' ${p}
sed -i '0,/%t/s//~\/.gitconfig/' ${p}
sed -i '0,/%t/s//~\/.gntrc/' ${p}
sed -i '0,/%t/s//~\/.gvimrc/' ${p}
sed -i '0,/%t/s//~\/.inputrc/' ${p}
sed -i '0,/%t/s//~\/.mailcap/' ${p}
sed -i '0,/%t/s//~\/.muttrc.config/' ${p}
sed -i '0,/%t/s//~\/.muttrc.steeleye/' ${p}
sed -i '0,/%t/s//~\/.muttrc.tgoldie/' ${p}
sed -i '0,/%t/s//~\/.NERDTreeBookmarks/' ${p}
sed -i '0,/%t/s//~\/.profile/' ${p}
sed -i '0,/%t/s//~\/.tmux.conf/' ${p}
sed -i '0,/%t/s//~\/.vimrc.config/' ${p}
sed -i '0,/%t/s//~\/.vimrc.funcs/' ${p}
sed -i '0,/%t/s//~\/.vimrc.js/' ${p}
sed -i '0,/%t/s//~\/.vimrc.plugins/' ${p}
sed -i '0,/%t/s//~\/.vimrc.python/' ${p}
sed -i '0,/%t/s//~\/.vimrc.simple/' ${p}
sed -i '0,/%t/s//~\/.vimrc/' ${p}


sed -i '0,/%n/s//~\/.bash_aliases/' ${p}
sed -i '0,/%n/s//~\/.bash_beeryardstc/' ${p}
sed -i '0,/%n/s//~\/.bash_beeryardvirt/' ${p}
sed -i '0,/%n/s//~\/.bash_chrome/' ${p}
sed -i '0,/%n/s//~\/.bash_funcs/' ${p}
sed -i '0,/%n/s//~\/.bash_logout/' ${p}
sed -i '0,/%n/s//~\/.bash_ps1/' ${p}
sed -i '0,/%n/s//~\/.bashrc/' ${p}
sed -i '0,/%n/s//~\/.gitconfig/' ${p}
sed -i '0,/%n/s//~\/.gntrc/' ${p}
sed -i '0,/%n/s//~\/.gvimrc/' ${p}
sed -i '0,/%n/s//~\/.inputrc/' ${p}
sed -i '0,/%n/s//~\/.mailcap/' ${p}
sed -i '0,/%n/s//~\/.muttrc.config/' ${p}
sed -i '0,/%n/s//~\/.muttrc.steeleye/' ${p}
sed -i '0,/%n/s//~\/.muttrc.tgoldie/' ${p}
sed -i '0,/%n/s//~\/.NERDTreeBookmarks/' ${p}
sed -i '0,/%n/s//~\/.profile/' ${p}
sed -i '0,/%n/s//~\/.tmux.conf/' ${p}
sed -i '0,/%n/s//~\/.vimrc.config/' ${p}
sed -i '0,/%n/s//~\/.vimrc.funcs/' ${p}
sed -i '0,/%n/s//~\/.vimrc.js/' ${p}
sed -i '0,/%n/s//~\/.vimrc.plugins/' ${p}
sed -i '0,/%n/s//~\/.vimrc.python/' ${p}
sed -i '0,/%n/s//~\/.vimrc.simple/' ${p}
sed -i '0,/%n/s//~\/.vimrc/' ${p}
