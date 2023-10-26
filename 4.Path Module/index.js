import path from "path";

// console.log(path.basename("c:\\nodejs\\app.html"))
// console.log(path.win32.basename("c:\\nodejs\\app.html",".html"))
// //BASE-NAME
// console.log(path.posix.basename('/tmp/myfile.html'));
// //DIR-NAME
// console.log(path.dirname('/foo/bar/baz/asdf/quux'));
// console.log(path.win32.dirname('c:\\nodejs\\app.html'));
//EXT-NAME
// console.log(path.extname('index.html'));

//PATH-JOIN Zero-length path segments are ignored. If the joined path string is a zero-length string then '.' will be returned, representing the current working directory.
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))//go UP a LEVEL
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..','..'))//go UP a LEVEL
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux',))
//normalize
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));

//path.parse(path)
console.log(path.parse('/home/user/dir/file.txt'))
console.log(path.parse('c:\\nodejs\\app.html').name)
console.log(path.parse('c:\\nodejs\\app.html').ext)
console.log(path.parse('c:\\nodejs\\app.html').base)