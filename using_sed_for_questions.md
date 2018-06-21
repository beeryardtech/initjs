# Bash and Sed examples

## Create File Paths and substitute in place holders

- CD into the directory in question

```bash
for x in `find $(pwd) -maxdepth 1 -type f | sort` ; do 
    r=$( echo $x | sed 's!/home/tgoldie!~!' ) 
    echo "sed -i '0,#%l#s##${r}#' \${p}"  | sed 's!/!\\/!g' | sed 's!#!/!g'
done
```

- Result:

```bash
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_bash_aliases.txt/' ${p}
sed -i '0,/%l/s//~\/Dropbox\/repos\/beeryardtech\/dots\/_bashrc.txt/' ${p}
```

- Get basename for target

```bash
for x in `find $(pwd) -maxdepth 1 -type f | sort` ; do 
    r=$(basename $x | sed 's!_!.!' | sed 's!.txt!!' | awk '{print "~/"$1}' )
    echo "sed -i '0,#%t#s##${r}#' \${p}" | sed 's!/!\\/!g' | sed 's!#!/!g'
done
```

- Result:

```
sed -i '0,/%t/s//~\/.bash_aliases/' ${p}
sed -i '0,/%t/s//~\/.bashrc/' ${p}
```


- Take list of strings and turn into an array for module export

```
cat ~/initjs/src/configs/installs.core.txt | 
sort | 
sed 's/\(.*\)/"\1",/' | 
sed 's/^/    /' | 
sed '1s;^;module.exports = [\n;' | 
sed '$s/$/\n\];/' |
tee ~/initjs/src/configs/aptget.installs.core.js
```

- Input:

```
at
autossh
bash-completion
```

- Output

```
module.export = [
    'at',
    'autossh',
    'bash-completion',
];
```
