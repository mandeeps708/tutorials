require 'RMagick'
include Magick

unless ARGV[0] and File.exists?(ARGV[0])
	puts "\n\n\nYou need to specify a filename: watermark.rb <filename>\n\n\n"
	exit 
end

img = Image.read(ARGV[0]).first
watermark = Image.new(600, 50)

watermark_text = Draw.new
# No Starch press was added below by the author of the tutorial. But Juan Gallardo has been the student to write this file from the book
watermark_text.annotate(watermark, 0,0,0,0 "No Starch Press") do
	watermark_text.gravity = CenterGravity
	self.pointsize = 50
	self.font_family = "Arial"
	self.font_weight = BoldWeight
	self.stroke = "none"	
end

watermark.rotate!(45)
watermark = watermark.shade(true, 310, 30)
img.composite!(watermark, SouthWestGravity, HardLightCompositeOp)
watermark.rotate!(-90)
img.composite!(watermark, NorthWestgravity, HardLightCompositeOp)
watermark.rotate!(90)
img.composite!(watermark, NorthEastgravity, HardLightCompositeOp)
watermark.rotate!(-90)
img.composite!(watermark, SouthEastgravity, HardLightCompositeOp)

if File.exists?("wm_#{ARGV[0]}")
	puts "Image already exists. Unable to write file."
	exit
end

puts "Writing wm_#{ARGV[0]}"
img.write("wm_#{ARGV[0]}")

