require 'exifr'
include 'EXIFR'

unless ARGV[0]
	puts "\n\n\nYou need to specify a filename: ruby imageInfo.rb <filename>"
	exit
end

info = JPEG.new(ARGV[0])

File.open("info_#{File.basename(ARGV[0])}".txt, "w") do |output|
	output
end