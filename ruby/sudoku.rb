class SudokuSolver
	def initialize(puzzle)
		@@p = puzzle.split(//)
	end

	def solver
	h=Hash.new
	81.times do |j|
		next if $p[j].to_i!=0
		80.times do |k|
			if k/9==j/9 || k%9==j%9 || k/27==j/27 && k%9/3==j%/9/3
				temp = $p[k]
			else
				temp = 0
			end
			h[temp] = 1
		end

		1.upto(9) do |v|
			next if h.has_key?(v.to_s)
			$p[j]=v.to_s
			solver
		end
		return $p[j]=0
	end

	puts "\n\nThe solution is:\n"
	print "+------------------------+\n/"
	1.upto(81) do |x|
		print " #{$p[x-1]}"
		if x%3==0 and x%9 !=0
			print "|"
		end
		if x%9==0 and x%81 !=0
			print "|\n|------------------------|\n|"
		end
		if x%81==0
			puts "|"
		end
	end
	puts "+------------------------+"
	return
	end
end 

unless ARGV[0].length==81
	puts "Your input was invalid. Please try again."
	puts "USAGE: ruby Sudoku.rb <Sudoku puzzleon the line/no spaces with 0's
being the blanks>"
	puts "Example:ruby sudoku.rb 00021600.....09605000"
	exit
end






