(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[2571],{2571:(e,t,n)=>{"use strict";n.r(t),n.d(t,{conf:()=>o,language:()=>d});var i=n(89587),r=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"],o={wordPattern:/(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["\x3c!--","--\x3e"],["<",">"],["{","}"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],surroundingPairs:[{open:'"',close:'"'},{open:"'",close:"'"},{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">"}],onEnterRules:[{beforeText:new RegExp("<(?!(?:"+r.join("|")+"))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:i.Mj.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(?!(?:"+r.join("|")+"))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:i.Mj.IndentAction.Indent}}],folding:{markers:{start:new RegExp("^\\s*\x3c!--\\s*#region\\b.*--\x3e"),end:new RegExp("^\\s*\x3c!--\\s*#endregion\\b.*--\x3e")}}},d={defaultToken:"",tokenPostfix:".html",ignoreCase:!0,tokenizer:{root:[[/<!DOCTYPE/,"metatag","@doctype"],[/<!--/,"comment","@comment"],[/(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/,["delimiter","tag","","delimiter"]],[/(<)(script)/,["delimiter",{token:"tag",next:"@script"}]],[/(<)(style)/,["delimiter",{token:"tag",next:"@style"}]],[/(<)((?:[\w\-]+:)?[\w\-]+)/,["delimiter",{token:"tag",next:"@otherTag"}]],[/(<\/)((?:[\w\-]+:)?[\w\-]+)/,["delimiter",{token:"tag",next:"@otherTag"}]],[/</,"delimiter"],[/[^<]+/]],doctype:[[/[^>]+/,"metatag.content"],[/>/,"metatag","@pop"]],comment:[[/-->/,"comment","@pop"],[/[^-]+/,"comment.content"],[/./,"comment.content"]],otherTag:[[/\/?>/,"delimiter","@pop"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/]],script:[[/type/,"attribute.name","@scriptAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/(<\/)(script\s*)(>)/,["delimiter","tag",{token:"delimiter",next:"@pop"}]]],scriptAfterType:[[/=/,"delimiter","@scriptAfterTypeEquals"],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptAfterTypeEquals:[[/"([^"]*)"/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@scriptWithCustomType.$1"}],[/>/,{token:"delimiter",next:"@scriptEmbedded",nextEmbedded:"text/javascript"}],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptWithCustomType:[[/>/,{token:"delimiter",next:"@scriptEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/script\s*>/,{token:"@rematch",next:"@pop"}]],scriptEmbedded:[[/<\/script/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]],style:[[/type/,"attribute.name","@styleAfterType"],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/(<\/)(style\s*)(>)/,["delimiter","tag",{token:"delimiter",next:"@pop"}]]],styleAfterType:[[/=/,"delimiter","@styleAfterTypeEquals"],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleAfterTypeEquals:[[/"([^"]*)"/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/'([^']*)'/,{token:"attribute.value",switchTo:"@styleWithCustomType.$1"}],[/>/,{token:"delimiter",next:"@styleEmbedded",nextEmbedded:"text/css"}],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleWithCustomType:[[/>/,{token:"delimiter",next:"@styleEmbedded.$S2",nextEmbedded:"$S2"}],[/"([^"]*)"/,"attribute.value"],[/'([^']*)'/,"attribute.value"],[/[\w\-]+/,"attribute.name"],[/=/,"delimiter"],[/[ \t\r\n]+/],[/<\/style\s*>/,{token:"@rematch",next:"@pop"}]],styleEmbedded:[[/<\/style/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/[^<]+/,""]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9odG1sL2h0bWwuanMiXSwibmFtZXMiOlsiRU1QVFlfRUxFTUVOVFMiLCJjb25mIiwid29yZFBhdHRlcm4iLCJjb21tZW50cyIsImJsb2NrQ29tbWVudCIsImJyYWNrZXRzIiwiYXV0b0Nsb3NpbmdQYWlycyIsIm9wZW4iLCJjbG9zZSIsInN1cnJvdW5kaW5nUGFpcnMiLCJvbkVudGVyUnVsZXMiLCJiZWZvcmVUZXh0IiwiUmVnRXhwIiwiam9pbiIsImFmdGVyVGV4dCIsImFjdGlvbiIsImluZGVudEFjdGlvbiIsImZvbGRpbmciLCJtYXJrZXJzIiwic3RhcnQiLCJlbmQiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsImlnbm9yZUNhc2UiLCJ0b2tlbml6ZXIiLCJyb290IiwidG9rZW4iLCJuZXh0IiwiZG9jdHlwZSIsImNvbW1lbnQiLCJvdGhlclRhZyIsInNjcmlwdCIsIm5leHRFbWJlZGRlZCIsInNjcmlwdEFmdGVyVHlwZSIsInNjcmlwdEFmdGVyVHlwZUVxdWFscyIsInN3aXRjaFRvIiwic2NyaXB0V2l0aEN1c3RvbVR5cGUiLCJzY3JpcHRFbWJlZGRlZCIsInN0eWxlIiwic3R5bGVBZnRlclR5cGUiLCJzdHlsZUFmdGVyVHlwZUVxdWFscyIsInN0eWxlV2l0aEN1c3RvbVR5cGUiLCJzdHlsZUVtYmVkZGVkIl0sIm1hcHBpbmdzIjoicUpBS0lBLEVBQWlCLENBQ2pCLE9BQ0EsT0FDQSxLQUNBLE1BQ0EsUUFDQSxLQUNBLE1BQ0EsUUFDQSxTQUNBLE9BQ0EsV0FDQSxPQUNBLFFBQ0EsU0FDQSxRQUNBLE9BRU9DLEVBQU8sQ0FDZEMsWUFBYSxpRkFDYkMsU0FBVSxDQUNOQyxhQUFjLENBQUMsVUFBUSxXQUUzQkMsU0FBVSxDQUNOLENBQUMsVUFBUSxVQUNULENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxL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VUFFaERlLGNBQWUsQ0FDWCxDQUFDLFdBQVksQ0FBRWhCLE1BQU8sV0FBWUMsS0FBTSxPQUFRSyxhQUFjLFNBQzlELENBQUMsUUFBUyIsImZpbGUiOiJqcy8yNTcxLjAwZTM1ZGExZTk3ODYzMzg2NDUyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5pbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICcuLi9maWxsZXJzL21vbmFjby1lZGl0b3ItY29yZS5qcyc7XHJcbnZhciBFTVBUWV9FTEVNRU5UUyA9IFtcclxuICAgICdhcmVhJyxcclxuICAgICdiYXNlJyxcclxuICAgICdicicsXHJcbiAgICAnY29sJyxcclxuICAgICdlbWJlZCcsXHJcbiAgICAnaHInLFxyXG4gICAgJ2ltZycsXHJcbiAgICAnaW5wdXQnLFxyXG4gICAgJ2tleWdlbicsXHJcbiAgICAnbGluaycsXHJcbiAgICAnbWVudWl0ZW0nLFxyXG4gICAgJ21ldGEnLFxyXG4gICAgJ3BhcmFtJyxcclxuICAgICdzb3VyY2UnLFxyXG4gICAgJ3RyYWNrJyxcclxuICAgICd3YnInXHJcbl07XHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIHdvcmRQYXR0ZXJuOiAvKC0/XFxkKlxcLlxcZFxcdyopfChbXlxcYFxcflxcIVxcQFxcJFxcXlxcJlxcKlxcKFxcKVxcPVxcK1xcW1xce1xcXVxcfVxcXFxcXHxcXDtcXDpcXCdcXFwiXFwsXFwuXFw8XFw+XFwvXFxzXSspL2csXHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWyc8IS0tJywgJy0tPiddXHJcbiAgICB9LFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICBbJzwhLS0nLCAnLS0+J10sXHJcbiAgICAgICAgWyc8JywgJz4nXSxcclxuICAgICAgICBbJ3snLCAnfSddLFxyXG4gICAgICAgIFsnKCcsICcpJ11cclxuICAgIF0sXHJcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9XHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfSxcclxuICAgICAgICB7IG9wZW46ICd7JywgY2xvc2U6ICd9JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1snLCBjbG9zZTogJ10nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnKCcsIGNsb3NlOiAnKScgfSxcclxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9XHJcbiAgICBdLFxyXG4gICAgb25FbnRlclJ1bGVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiZWZvcmVUZXh0OiBuZXcgUmVnRXhwKFwiPCg/ISg/OlwiICsgRU1QVFlfRUxFTUVOVFMuam9pbignfCcpICsgXCIpKShbXzpcXFxcd11bXzpcXFxcdy0uXFxcXGRdKikoW14vPl0qKD8hLyk+KVtePF0qJFwiLCAnaScpLFxyXG4gICAgICAgICAgICBhZnRlclRleHQ6IC9ePFxcLyhbXzpcXHddW186XFx3LS5cXGRdKilcXHMqPiQvaSxcclxuICAgICAgICAgICAgYWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBpbmRlbnRBY3Rpb246IGxhbmd1YWdlcy5JbmRlbnRBY3Rpb24uSW5kZW50T3V0ZGVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IG5ldyBSZWdFeHAoXCI8KD8hKD86XCIgKyBFTVBUWV9FTEVNRU5UUy5qb2luKCd8JykgKyBcIikpKFxcXFx3W1xcXFx3XFxcXGRdKikoW14vPl0qKD8hLyk+KVtePF0qJFwiLCAnaScpLFxyXG4gICAgICAgICAgICBhY3Rpb246IHsgaW5kZW50QWN0aW9uOiBsYW5ndWFnZXMuSW5kZW50QWN0aW9uLkluZGVudCB9XHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIGZvbGRpbmc6IHtcclxuICAgICAgICBtYXJrZXJzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKCdeXFxcXHMqPCEtLVxcXFxzKiNyZWdpb25cXFxcYi4qLS0+JyksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKjwhLS1cXFxccyojZW5kcmVnaW9uXFxcXGIuKi0tPicpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5odG1sJyxcclxuICAgIGlnbm9yZUNhc2U6IHRydWUsXHJcbiAgICAvLyBUaGUgbWFpbiB0b2tlbml6ZXIgZm9yIG91ciBsYW5ndWFnZXNcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgWy88IURPQ1RZUEUvLCAnbWV0YXRhZycsICdAZG9jdHlwZSddLFxyXG4gICAgICAgICAgICBbLzwhLS0vLCAnY29tbWVudCcsICdAY29tbWVudCddLFxyXG4gICAgICAgICAgICBbLyg8KSgoPzpbXFx3XFwtXSs6KT9bXFx3XFwtXSspKFxccyopKFxcLz4pLywgWydkZWxpbWl0ZXInLCAndGFnJywgJycsICdkZWxpbWl0ZXInXV0sXHJcbiAgICAgICAgICAgIFsvKDwpKHNjcmlwdCkvLCBbJ2RlbGltaXRlcicsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHNjcmlwdCcgfV1dLFxyXG4gICAgICAgICAgICBbLyg8KShzdHlsZSkvLCBbJ2RlbGltaXRlcicsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHN0eWxlJyB9XV0sXHJcbiAgICAgICAgICAgIFsvKDwpKCg/OltcXHdcXC1dKzopP1tcXHdcXC1dKykvLCBbJ2RlbGltaXRlcicsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQG90aGVyVGFnJyB9XV0sXHJcbiAgICAgICAgICAgIFsvKDxcXC8pKCg/OltcXHdcXC1dKzopP1tcXHdcXC1dKykvLCBbJ2RlbGltaXRlcicsIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQG90aGVyVGFnJyB9XV0sXHJcbiAgICAgICAgICAgIFsvPC8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9bXjxdKy9dIC8vIHRleHRcclxuICAgICAgICBdLFxyXG4gICAgICAgIGRvY3R5cGU6IFtcclxuICAgICAgICAgICAgWy9bXj5dKy8sICdtZXRhdGFnLmNvbnRlbnQnXSxcclxuICAgICAgICAgICAgWy8+LywgJ21ldGF0YWcnLCAnQHBvcCddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvLS0+LywgJ2NvbW1lbnQnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL1teLV0rLywgJ2NvbW1lbnQuY29udGVudCddLFxyXG4gICAgICAgICAgICBbLy4vLCAnY29tbWVudC5jb250ZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIG90aGVyVGFnOiBbXHJcbiAgICAgICAgICAgIFsvXFwvPz4vLCAnZGVsaW1pdGVyJywgJ0Bwb3AnXSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dIC8vIHdoaXRlc3BhY2VcclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIC0tIEJFR0lOIDxzY3JpcHQ+IHRhZ3MgaGFuZGxpbmdcclxuICAgICAgICAvLyBBZnRlciA8c2NyaXB0XHJcbiAgICAgICAgc2NyaXB0OiBbXHJcbiAgICAgICAgICAgIFsvdHlwZS8sICdhdHRyaWJ1dGUubmFtZScsICdAc2NyaXB0QWZ0ZXJUeXBlJ10sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvPi8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc2NyaXB0RW1iZWRkZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJ3RleHQvamF2YXNjcmlwdCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvKDxcXC8pKHNjcmlwdFxccyopKD4pLywgWydkZWxpbWl0ZXInLCAndGFnJywgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHQgLi4uIHR5cGVcclxuICAgICAgICBzY3JpcHRBZnRlclR5cGU6IFtcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlcicsICdAc2NyaXB0QWZ0ZXJUeXBlRXF1YWxzJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8+LyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9qYXZhc2NyaXB0J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvXSxcclxuICAgICAgICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEFmdGVyIDxzY3JpcHQgLi4uIHR5cGUgPVxyXG4gICAgICAgIHNjcmlwdEFmdGVyVHlwZUVxdWFsczogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvXCIoW15cIl0qKVwiLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2F0dHJpYnV0ZS52YWx1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoVG86ICdAc2NyaXB0V2l0aEN1c3RvbVR5cGUuJDEnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8nKFteJ10qKScvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJyxcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BzY3JpcHRXaXRoQ3VzdG9tVHlwZS4kMSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLz4vLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnZGVsaW1pdGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0OiAnQHNjcmlwdEVtYmVkZGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWZ0ZXIgPHNjcmlwdCAuLi4gdHlwZSA9ICRTMlxyXG4gICAgICAgIHNjcmlwdFdpdGhDdXN0b21UeXBlOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8+LyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzY3JpcHRFbWJlZGRlZC4kUzInLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHRFbWJlZGRlZDogJyRTMidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgWy9cIihbXlwiXSopXCIvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvJyhbXiddKiknLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbL1tcXHdcXC1dKy8sICdhdHRyaWJ1dGUubmFtZSddLFxyXG4gICAgICAgICAgICBbLz0vLCAnZGVsaW1pdGVyJ10sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zY3JpcHRcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2NyaXB0RW1iZWRkZWQ6IFtcclxuICAgICAgICAgICAgWy88XFwvc2NyaXB0LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnLCBuZXh0RW1iZWRkZWQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy9bXjxdKy8sICcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gLS0gRU5EIDxzY3JpcHQ+IHRhZ3MgaGFuZGxpbmdcclxuICAgICAgICAvLyAtLSBCRUdJTiA8c3R5bGU+IHRhZ3MgaGFuZGxpbmdcclxuICAgICAgICAvLyBBZnRlciA8c3R5bGVcclxuICAgICAgICBzdHlsZTogW1xyXG4gICAgICAgICAgICBbL3R5cGUvLCAnYXR0cmlidXRlLm5hbWUnLCAnQHN0eWxlQWZ0ZXJUeXBlJ10sXHJcbiAgICAgICAgICAgIFsvXCIoW15cIl0qKVwiLywgJ2F0dHJpYnV0ZS52YWx1ZSddLFxyXG4gICAgICAgICAgICBbLycoW14nXSopJy8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy9bXFx3XFwtXSsvLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWy89LywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvPi8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc3R5bGVFbWJlZGRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLyg8XFwvKShzdHlsZVxccyopKD4pLywgWydkZWxpbWl0ZXInLCAndGFnJywgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZVxyXG4gICAgICAgIHN0eWxlQWZ0ZXJUeXBlOiBbXHJcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInLCAnQHN0eWxlQWZ0ZXJUeXBlRXF1YWxzJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8+LyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzdHlsZUVtYmVkZGVkJyxcclxuICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcydcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIEFmdGVyIDxzdHlsZSAuLi4gdHlwZSA9XHJcbiAgICAgICAgc3R5bGVBZnRlclR5cGVFcXVhbHM6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL1wiKFteXCJdKilcIi8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdhdHRyaWJ1dGUudmFsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnQHN0eWxlV2l0aEN1c3RvbVR5cGUuJDEnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8nKFteJ10qKScvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiAnYXR0cmlidXRlLnZhbHVlJyxcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ0BzdHlsZVdpdGhDdXN0b21UeXBlLiQxJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAvPi8sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46ICdkZWxpbWl0ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIG5leHQ6ICdAc3R5bGVFbWJlZGRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAndGV4dC9jc3MnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy9dLFxyXG4gICAgICAgICAgICBbLzxcXC9zdHlsZVxccyo+LywgeyB0b2tlbjogJ0ByZW1hdGNoJywgbmV4dDogJ0Bwb3AnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBBZnRlciA8c3R5bGUgLi4uIHR5cGUgPSAkUzJcclxuICAgICAgICBzdHlsZVdpdGhDdXN0b21UeXBlOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8+LyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ2RlbGltaXRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dDogJ0BzdHlsZUVtYmVkZGVkLiRTMicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAnJFMyJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbL1wiKFteXCJdKilcIi8sICdhdHRyaWJ1dGUudmFsdWUnXSxcclxuICAgICAgICAgICAgWy8nKFteJ10qKScvLCAnYXR0cmlidXRlLnZhbHVlJ10sXHJcbiAgICAgICAgICAgIFsvW1xcd1xcLV0rLywgJ2F0dHJpYnV0ZS5uYW1lJ10sXHJcbiAgICAgICAgICAgIFsvPS8sICdkZWxpbWl0ZXInXSxcclxuICAgICAgICAgICAgWy9bIFxcdFxcclxcbl0rL10sXHJcbiAgICAgICAgICAgIFsvPFxcL3N0eWxlXFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHN0eWxlRW1iZWRkZWQ6IFtcclxuICAgICAgICAgICAgWy88XFwvc3R5bGUvLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcsIG5leHRFbWJlZGRlZDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbL1tePF0rLywgJyddXHJcbiAgICAgICAgXVxyXG4gICAgICAgIC8vIC0tIEVORCA8c3R5bGU+IHRhZ3MgaGFuZGxpbmdcclxuICAgIH1cclxufTtcclxuLy8gVEVTVEVEIFdJVEg6XHJcbi8vIDwhRE9DVFlQRSBodG1sPlxyXG4vLyA8aHRtbD5cclxuLy8gPGhlYWQ+XHJcbi8vICAgPHRpdGxlPk1vbmFyY2ggV29ya2JlbmNoPC90aXRsZT5cclxuLy8gICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4vLyAgIDwhLS0tLVxyXG4vLyAgIC0tIC0tIC0tIGEgY29tbWVudCAtLSAtLSAtLVxyXG4vLyAgIC0tLS0+XHJcbi8vICAgPHN0eWxlIGJhaD1cImJhaFwiPlxyXG4vLyAgICAgYm9keSB7IGZvbnQtZmFtaWx5OiBDb25zb2xhczsgfSAvKiBuaWNlICovXHJcbi8vICAgPC9zdHlsZT5cclxuLy8gPC9oZWFkXHJcbi8vID5cclxuLy8gYSA9IFwiYXNkXCJcclxuLy8gPGJvZHk+XHJcbi8vICAgPGJyLz5cclxuLy8gICA8ZGl2XHJcbi8vICAgY2xhc3NcclxuLy8gICA9XHJcbi8vICAgXCJ0ZXN0XCJcclxuLy8gICA+XHJcbi8vICAgICA8c2NyaXB0PlxyXG4vLyAgICAgICBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICBhbGVydChcImhpIDwvIHNjcmlwdD5cIik7IC8vIGphdmFzY3JpcHRcclxuLy8gICAgICAgfTtcclxuLy8gICAgIDwvc2NyaXB0PlxyXG4vLyAgICAgPHNjcmlwdFxyXG4vLyBcdGJhaD1cImFzZGZnXCJcclxuLy8gXHR0eXBlPVwidGV4dC9jc3NcIlxyXG4vLyBcdD5cclxuLy8gICAuYmFyIHsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cclxuLy8gICAgIDwvc2NyaXB0PlxyXG4vLyAgIDwvZGl2PlxyXG4vLyA8L2JvZHk+XHJcbi8vIDwvaHRtbD5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==