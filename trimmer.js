const query = `            self.options.delegate?.valueWasEntered(query) { founds in
                self.matches = founds
                
                if self.matches.isEmpty {
                    self.matches.append(
                        CodeSnippet(
                        id:"*19870922*",
                        title: query,
                        codeSnippet:
                        """
                        """,
                        programmingLanguageName: "Search the web",
                        starSenderIdArray: []
                    ))
                }
                
                MainQ {
                    self.reloadMatches(with: event)
                }
            }`

const space = " "
const newLine = "\n"
const replaceTarget = ""

function RecurPrefixWhiteSpaceCount({ src, index }) {
	if (src.length == 0) {
		return 0
	}

	const c = src[index]
	if (c == undefined) {
		return index
	}

	return c.startsWith(space) ? RecurPrefixWhiteSpaceCount({ src, index: index + 1 }) : index
}

function TrimPrefixWhiteSpace({ src }) {
	const count = RecurPrefixWhiteSpaceCount({ src: src, index: 0 })
	return src.split(newLine)
		.map((l) => {
			const whiteSpaces = [...Array(count).keys()].map(k => space).reduce(((s, c) => s += c), [])
			const res = l.replace(whiteSpaces, replaceTarget)
			return res
		})
		.join(newLine)
}

console.log("res : ", TrimPrefixWhiteSpace({ src: query}));
