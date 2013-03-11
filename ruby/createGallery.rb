require 'RMagick'
require 'ftools'
include Magick

photos_row = 4
table_border = 1
html_rows = 1 

File.makedirs("gallery/thumbs", "gallery/resize")
output = File.new("gallery/index.html","w+b")
html = <<EOF
<html>
	<head>
		<title>My Photos</title>
	</head>
	<body bgcolor="#d0d0d0">
		<h1>Welcome To My Photo Gallery</h1>
		<table border=#{table_border}>
EOF
output.puts html

Dir['*.[Jj][Pp]*[Gg]'].each do |pic|
	thumb = Image.read(pic)[0]
	thumb.change_geometry!('150x150') do |cols, rows, img|
		thumb.resize!(cols, rows)
	end
	if File.exists?("gallery/thumbs/th_#{pic}")
		puts "Could not write file. Thumbnail already exists."
	else
		thumb.write "gallery/thumbs/th_#{pic}"
	end

	resize = Image.read(pic)[0]

	resize.change_geometry!('800x600') do |cols, rows, img|
		resize.resize!(cols, rows)
	end
	if File.exists?("gallery/resize/resize_#{pic}")
		puts "Could not write file. Resized image already exists."
	else
		resize.write("gallery/resize/resize_#{pic}")
	end

	if html_rows % photos_row == 1
		output.puts "\n<tr>"
	end

output.puts <<EOF
	<td><a href="resize/resize_#{pic}/" title="#{pic}"
target="_blank"><img src="thumbs/th_#{pic}" alt="#{pic}"/></a></td>
EOF

	if html_rows % photos_row == 0 
		output.puts "</tr>"
	end
	html_rows+=1
end

unless html_rows % photos_row == 1
	output.puts "</tr>"
end

output.puts "</body>\n</html>"
output.puts "<!-- whats up? -->"
output.close


























