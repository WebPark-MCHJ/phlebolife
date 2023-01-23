import ReactMarkdown from "react-markdown";

const RichContent = ({ children, ...props }) => {
	return (
		<article {...props}>
			<ReactMarkdown className="markdown" children={children} />
		</article>
	);
};

export default RichContent;
