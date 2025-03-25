const ChatResponse = ({response}) => {
if(!response){
    return null;
}

   const { candidates, usageMetadata } = response;


    return (
        <div className="container my-4" >
            <h3>Response</h3>
        {candidates.map((candidate,index) => (
            <div class="card mb-3" key={index}>
                <div class="card-body">
                    <h5 class="card-title">candidate {index +1}</h5>
                    <p class="card-text">{candidate.content.parts[0].text}</p>
                    <h6>Citation:</h6>
                    <u1>
                        {candidate?.citationMetadata?.citationSources.map((source,idx) =>(
                            <li key={idx}>
                                <a href={source.url} target="blank" rel="noopener noreferrer">
                                    {source.url}
                                </a>{""}
                                (Indexes: {source.startIndex} - {source.endIndex})
                            </li>
                        ))}
                    </u1>
                    </div>
            </div>
        ))}

        <h4>Usage Metadata</h4>
        <p>Prompt Tokens:  {usageMetadata.promptTokenCount}</p>
        <p>ProResponse Token:  {usageMetadata.candidatesTokenCount}</p>
        <p>Total Tokens:  {usageMetadata.promptTokenCount}</p>

        </div>
    )
}

export default ChatResponse;