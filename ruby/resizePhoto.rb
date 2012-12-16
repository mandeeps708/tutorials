require 'RMagick'
include Magick

unless ARGV[0]
	puts "\n\n\nYou need to specify a filename: resizePhoto.rb <filename>\n\n\n"
	exit
end

img = Image.read(ARGV[0]).first
width = nil
height = nil

img.change_geometry!(400x400) do |cols, rows, img|
	 img.resize!(cols, rows)
	width = cols
	height = rows
end

file_name = "#{width}x#{height}_#{ARGV[0]}"

if File.exists?(file_name)
	puts "File already exists. Unable to write file."
	exit
end

img.write(file_name)