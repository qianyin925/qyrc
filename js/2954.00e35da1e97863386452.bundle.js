(self.webpackChunkqyrc=self.webpackChunkqyrc||[]).push([[2954],{42954:(e,t,s)=>{"use strict";s.r(t),s.d(t,{conf:()=>n,language:()=>o});var n={comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"<",close:">",notIn:["string"]}],surroundingPairs:[{open:"(",close:")"},{open:"[",close:"]"},{open:"`",close:"`"}],folding:{markers:{start:new RegExp("^\\s*\x3c!--\\s*#?region\\b.*--\x3e"),end:new RegExp("^\\s*\x3c!--\\s*#?endregion\\b.*--\x3e")}}},o={defaultToken:"",tokenPostfix:".md",control:/[\\`*_\[\]{}()#+\-\.!]/,noncontrol:/[^\\`*_\[\]{}()#+\-\.!]/,escapes:/\\(?:@control)/,jsescapes:/\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,empty:["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param"],tokenizer:{root:[[/^\s*\|/,"@rematch","@table_header"],[/^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/,["white","keyword","keyword","keyword"]],[/^\s*(=+|\-+)\s*$/,"keyword"],[/^\s*((\*[ ]?)+)\s*$/,"meta.separator"],[/^\s*>+/,"comment"],[/^\s*([\*\-+:]|\d+\.)\s/,"keyword"],[/^(\t|[ ]{4})[^ ].*$/,"string"],[/^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/,{token:"string",next:"@codeblock"}],[/^\s*```\s*((?:\w|[\/\-#])+).*$/,{token:"string",next:"@codeblockgh",nextEmbedded:"$1"}],[/^\s*```\s*$/,{token:"string",next:"@codeblock"}],{include:"@linecontent"}],table_header:[{include:"@table_common"},[/[^\|]+/,"keyword.table.header"]],table_body:[{include:"@table_common"},{include:"@linecontent"}],table_common:[[/\s*[\-:]+\s*/,{token:"keyword",switchTo:"table_body"}],[/^\s*\|/,"keyword.table.left"],[/^\s*[^\|]/,"@rematch","@pop"],[/^\s*$/,"@rematch","@pop"],[/\|/,{cases:{"@eos":"keyword.table.right","@default":"keyword.table.middle"}}]],codeblock:[[/^\s*~~~\s*$/,{token:"string",next:"@pop"}],[/^\s*```\s*$/,{token:"string",next:"@pop"}],[/.*$/,"variable.source"]],codeblockgh:[[/```\s*$/,{token:"variable.source",next:"@pop",nextEmbedded:"@pop"}],[/[^`]+/,"variable.source"]],linecontent:[[/&\w+;/,"string.escape"],[/@escapes/,"escape"],[/\b__([^\\_]|@escapes|_(?!_))+__\b/,"strong"],[/\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/,"strong"],[/\b_[^_]+_\b/,"emphasis"],[/\*([^\\*]|@escapes)+\*/,"emphasis"],[/`([^\\`]|@escapes)+`/,"variable"],[/\{+[^}]+\}+/,"string.target"],[/(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/,["string.link","","string.link"]],[/(!?\[)((?:[^\]\\]|@escapes)*)(\])/,"string.link"],{include:"html"}],html:[[/<(\w+)\/>/,"tag"],[/<(\w+)/,{cases:{"@empty":{token:"tag",next:"@tag.$1"},"@default":{token:"tag",next:"@tag.$1"}}}],[/<\/(\w+)\s*>/,{token:"tag"}],[/<!--/,"comment","@comment"]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,"comment","@pop"],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]],tag:[[/[ \t\r\n]+/,"white"],[/(type)(\s*=\s*)(")([^"]+)(")/,["attribute.name.html","delimiter.html","string.html",{token:"string.html",switchTo:"@tag.$S2.$4"},"string.html"]],[/(type)(\s*=\s*)(')([^']+)(')/,["attribute.name.html","delimiter.html","string.html",{token:"string.html",switchTo:"@tag.$S2.$4"},"string.html"]],[/(\w+)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name.html","delimiter.html","string.html"]],[/\w+/,"attribute.name.html"],[/\/>/,"tag","@pop"],[/>/,{cases:{"$S2==style":{token:"tag",switchTo:"embeddedStyle",nextEmbedded:"text/css"},"$S2==script":{cases:{$S3:{token:"tag",switchTo:"embeddedScript",nextEmbedded:"$S3"},"@default":{token:"tag",switchTo:"embeddedScript",nextEmbedded:"text/javascript"}}},"@default":{token:"tag",next:"@pop"}}}]],embeddedStyle:[[/[^<]+/,""],[/<\/style\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]],embeddedScript:[[/[^<]+/,""],[/<\/script\s*>/,{token:"@rematch",next:"@pop",nextEmbedded:"@pop"}],[/</,""]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xeXJjLy4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9tYXJrZG93bi9tYXJrZG93bi5qcyJdLCJuYW1lcyI6WyJjb25mIiwiY29tbWVudHMiLCJibG9ja0NvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJub3RJbiIsInN1cnJvdW5kaW5nUGFpcnMiLCJmb2xkaW5nIiwibWFya2VycyIsInN0YXJ0IiwiUmVnRXhwIiwiZW5kIiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJ0b2tlblBvc3RmaXgiLCJjb250cm9sIiwibm9uY29udHJvbCIsImVzY2FwZXMiLCJqc2VzY2FwZXMiLCJlbXB0eSIsInRva2VuaXplciIsInJvb3QiLCJ0b2tlbiIsIm5leHQiLCJuZXh0RW1iZWRkZWQiLCJpbmNsdWRlIiwidGFibGVfaGVhZGVyIiwidGFibGVfYm9keSIsInRhYmxlX2NvbW1vbiIsInN3aXRjaFRvIiwiY2FzZXMiLCJjb2RlYmxvY2siLCJjb2RlYmxvY2tnaCIsImxpbmVjb250ZW50IiwiaHRtbCIsImNvbW1lbnQiLCJ0YWciLCIkUzMiLCJlbWJlZGRlZFN0eWxlIiwiZW1iZWRkZWRTY3JpcHQiXSwibWFwcGluZ3MiOiJ1SUFJTyxJQUFJQSxFQUFPLENBQ2RDLFNBQVUsQ0FDTkMsYUFBYyxDQUFDLFVBQVEsV0FFM0JDLFNBQVUsQ0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssS0FDTixDQUFDLElBQUssTUFFVkMsaUJBQWtCLENBQ2QsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sS0FDcEIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxZQUVyQ0MsaUJBQWtCLENBQ2QsQ0FBRUgsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVE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TUFBTyxDQUNITyxJQUFLLENBQ0RmLE1BQU8sTUFDUE8sU0FBVSxpQkFDVkwsYUFBYyxPQUVsQixXQUFZLENBQ1JGLE1BQU8sTUFDUE8sU0FBVSxpQkFDVkwsYUFBYyxxQkFJMUIsV0FBWSxDQUFFRixNQUFPLE1BQU9DLEtBQU0sWUFLbERlLGNBQWUsQ0FDWCxDQUFDLFFBQVMsSUFDVixDQUFDLGVBQWdCLENBQUVoQixNQUFPLFdBQVlDLEtBQU0sT0FBUUMsYUFBYyxTQUNsRSxDQUFDLElBQUssS0FFVmUsZUFBZ0IsQ0FDWixDQUFDLFFBQVMsSUFDVixDQUFDLGdCQUFpQixDQUFFakIsTUFBTyxXQUFZQyxLQUFNLE9BQVFDLGFBQWMsU0FDbkUsQ0FBQyxJQUFLIiwiZmlsZSI6ImpzLzI5NTQuMDBlMzVkYTFlOTc4NjMzODY0NTIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmV4cG9ydCB2YXIgY29uZiA9IHtcclxuICAgIGNvbW1lbnRzOiB7XHJcbiAgICAgICAgYmxvY2tDb21tZW50OiBbJzwhLS0nLCAnLS0+J11cclxuICAgIH0sXHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nLCBub3RJbjogWydzdHJpbmcnXSB9XHJcbiAgICBdLFxyXG4gICAgc3Vycm91bmRpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICdgJywgY2xvc2U6ICdgJyB9XHJcbiAgICBdLFxyXG4gICAgZm9sZGluZzoge1xyXG4gICAgICAgIG1hcmtlcnM6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoJ15cXFxccyo8IS0tXFxcXHMqIz9yZWdpb25cXFxcYi4qLS0+JyksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IFJlZ0V4cCgnXlxcXFxzKjwhLS1cXFxccyojP2VuZHJlZ2lvblxcXFxiLiotLT4nKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuZXhwb3J0IHZhciBsYW5ndWFnZSA9IHtcclxuICAgIGRlZmF1bHRUb2tlbjogJycsXHJcbiAgICB0b2tlblBvc3RmaXg6ICcubWQnLFxyXG4gICAgLy8gZXNjYXBlIGNvZGVzXHJcbiAgICBjb250cm9sOiAvW1xcXFxgKl9cXFtcXF17fSgpIytcXC1cXC4hXS8sXHJcbiAgICBub25jb250cm9sOiAvW15cXFxcYCpfXFxbXFxde30oKSMrXFwtXFwuIV0vLFxyXG4gICAgZXNjYXBlczogL1xcXFwoPzpAY29udHJvbCkvLFxyXG4gICAgLy8gZXNjYXBlIGNvZGVzIGZvciBqYXZhc2NyaXB0L0NTUyBzdHJpbmdzXHJcbiAgICBqc2VzY2FwZXM6IC9cXFxcKD86W2J0bmZyXFxcXFwiJ118WzAtN11bMC03XT98WzAtM11bMC03XXsyfSkvLFxyXG4gICAgLy8gbm9uIG1hdGNoZWQgZWxlbWVudHNcclxuICAgIGVtcHR5OiBbXHJcbiAgICAgICAgJ2FyZWEnLFxyXG4gICAgICAgICdiYXNlJyxcclxuICAgICAgICAnYmFzZWZvbnQnLFxyXG4gICAgICAgICdicicsXHJcbiAgICAgICAgJ2NvbCcsXHJcbiAgICAgICAgJ2ZyYW1lJyxcclxuICAgICAgICAnaHInLFxyXG4gICAgICAgICdpbWcnLFxyXG4gICAgICAgICdpbnB1dCcsXHJcbiAgICAgICAgJ2lzaW5kZXgnLFxyXG4gICAgICAgICdsaW5rJyxcclxuICAgICAgICAnbWV0YScsXHJcbiAgICAgICAgJ3BhcmFtJ1xyXG4gICAgXSxcclxuICAgIHRva2VuaXplcjoge1xyXG4gICAgICAgIHJvb3Q6IFtcclxuICAgICAgICAgICAgLy8gbWFya2Rvd24gdGFibGVzXHJcbiAgICAgICAgICAgIFsvXlxccypcXHwvLCAnQHJlbWF0Y2gnLCAnQHRhYmxlX2hlYWRlciddLFxyXG4gICAgICAgICAgICAvLyBoZWFkZXJzICh3aXRoICMpXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9eKFxcc3swLDN9KSgjKykoKD86W15cXFxcI118QGVzY2FwZXMpKykoKD86IyspPykvLFxyXG4gICAgICAgICAgICAgICAgWyd3aGl0ZScsICdrZXl3b3JkJywgJ2tleXdvcmQnLCAna2V5d29yZCddXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIC8vIGhlYWRlcnMgKHdpdGggPSlcclxuICAgICAgICAgICAgWy9eXFxzKig9K3xcXC0rKVxccyokLywgJ2tleXdvcmQnXSxcclxuICAgICAgICAgICAgLy8gaGVhZGVycyAod2l0aCAqKiopXHJcbiAgICAgICAgICAgIFsvXlxccyooKFxcKlsgXT8pKylcXHMqJC8sICdtZXRhLnNlcGFyYXRvciddLFxyXG4gICAgICAgICAgICAvLyBxdW90ZVxyXG4gICAgICAgICAgICBbL15cXHMqPisvLCAnY29tbWVudCddLFxyXG4gICAgICAgICAgICAvLyBsaXN0IChzdGFydGluZyB3aXRoICogb3IgbnVtYmVyKVxyXG4gICAgICAgICAgICBbL15cXHMqKFtcXCpcXC0rOl18XFxkK1xcLilcXHMvLCAna2V5d29yZCddLFxyXG4gICAgICAgICAgICAvLyBjb2RlIGJsb2NrICg0IHNwYWNlcyBpbmRlbnQpXHJcbiAgICAgICAgICAgIFsvXihcXHR8WyBdezR9KVteIF0uKiQvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIC8vIGNvZGUgYmxvY2sgKDMgdGlsZGUpXHJcbiAgICAgICAgICAgIFsvXlxccyp+fn5cXHMqKCg/Olxcd3xbXFwvXFwtI10pKyk/XFxzKiQvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bjb2RlYmxvY2snIH1dLFxyXG4gICAgICAgICAgICAvLyBnaXRodWIgc3R5bGUgY29kZSBibG9ja3MgKHdpdGggYmFja3RpY2tzIGFuZCBsYW5ndWFnZSlcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgL15cXHMqYGBgXFxzKigoPzpcXHd8W1xcL1xcLSNdKSspLiokLyxcclxuICAgICAgICAgICAgICAgIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQGNvZGVibG9ja2doJywgbmV4dEVtYmVkZGVkOiAnJDEnIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gZ2l0aHViIHN0eWxlIGNvZGUgYmxvY2tzICh3aXRoIGJhY2t0aWNrcyBidXQgbm8gbGFuZ3VhZ2UpXHJcbiAgICAgICAgICAgIFsvXlxccypgYGBcXHMqJC8sIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQGNvZGVibG9jaycgfV0sXHJcbiAgICAgICAgICAgIC8vIG1hcmt1cCB3aXRoaW4gbGluZXNcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQGxpbmVjb250ZW50JyB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YWJsZV9oZWFkZXI6IFtcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHRhYmxlX2NvbW1vbicgfSxcclxuICAgICAgICAgICAgWy9bXlxcfF0rLywgJ2tleXdvcmQudGFibGUuaGVhZGVyJ10gLy8gdGFibGUgaGVhZGVyXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0YWJsZV9ib2R5OiBbeyBpbmNsdWRlOiAnQHRhYmxlX2NvbW1vbicgfSwgeyBpbmNsdWRlOiAnQGxpbmVjb250ZW50JyB9XSxcclxuICAgICAgICB0YWJsZV9jb21tb246IFtcclxuICAgICAgICAgICAgWy9cXHMqW1xcLTpdK1xccyovLCB7IHRva2VuOiAna2V5d29yZCcsIHN3aXRjaFRvOiAndGFibGVfYm9keScgfV0sXHJcbiAgICAgICAgICAgIFsvXlxccypcXHwvLCAna2V5d29yZC50YWJsZS5sZWZ0J10sXHJcbiAgICAgICAgICAgIFsvXlxccypbXlxcfF0vLCAnQHJlbWF0Y2gnLCAnQHBvcCddLFxyXG4gICAgICAgICAgICBbL15cXHMqJC8sICdAcmVtYXRjaCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC9cXHwvLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZW9zJzogJ2tleXdvcmQudGFibGUucmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiAna2V5d29yZC50YWJsZS5taWRkbGUnIC8vIGlubmVyIHxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvZGVibG9jazogW1xyXG4gICAgICAgICAgICBbL15cXHMqfn5+XFxzKiQvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbL15cXHMqYGBgXFxzKiQvLCB7IHRva2VuOiAnc3RyaW5nJywgbmV4dDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbLy4qJC8sICd2YXJpYWJsZS5zb3VyY2UnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gZ2l0aHViIHN0eWxlIGNvZGUgYmxvY2tzXHJcbiAgICAgICAgY29kZWJsb2NrZ2g6IFtcclxuICAgICAgICAgICAgWy9gYGBcXHMqJC8sIHsgdG9rZW46ICd2YXJpYWJsZS5zb3VyY2UnLCBuZXh0OiAnQHBvcCcsIG5leHRFbWJlZGRlZDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbL1teYF0rLywgJ3ZhcmlhYmxlLnNvdXJjZSddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBsaW5lY29udGVudDogW1xyXG4gICAgICAgICAgICAvLyBlc2NhcGVzXHJcbiAgICAgICAgICAgIFsvJlxcdys7LywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICAgICAgWy9AZXNjYXBlcy8sICdlc2NhcGUnXSxcclxuICAgICAgICAgICAgLy8gdmFyaW91cyBtYXJrdXBcclxuICAgICAgICAgICAgWy9cXGJfXyhbXlxcXFxfXXxAZXNjYXBlc3xfKD8hXykpK19fXFxiLywgJ3N0cm9uZyddLFxyXG4gICAgICAgICAgICBbL1xcKlxcKihbXlxcXFwqXXxAZXNjYXBlc3xcXCooPyFcXCopKStcXCpcXCovLCAnc3Ryb25nJ10sXHJcbiAgICAgICAgICAgIFsvXFxiX1teX10rX1xcYi8sICdlbXBoYXNpcyddLFxyXG4gICAgICAgICAgICBbL1xcKihbXlxcXFwqXXxAZXNjYXBlcykrXFwqLywgJ2VtcGhhc2lzJ10sXHJcbiAgICAgICAgICAgIFsvYChbXlxcXFxgXXxAZXNjYXBlcykrYC8sICd2YXJpYWJsZSddLFxyXG4gICAgICAgICAgICAvLyBsaW5rc1xyXG4gICAgICAgICAgICBbL1xceytbXn1dK1xcfSsvLCAnc3RyaW5nLnRhcmdldCddLFxyXG4gICAgICAgICAgICBbLyghP1xcWykoKD86W15cXF1cXFxcXXxAZXNjYXBlcykqKShcXF1cXChbXlxcKV0rXFwpKS8sIFsnc3RyaW5nLmxpbmsnLCAnJywgJ3N0cmluZy5saW5rJ11dLFxyXG4gICAgICAgICAgICBbLyghP1xcWykoKD86W15cXF1cXFxcXXxAZXNjYXBlcykqKShcXF0pLywgJ3N0cmluZy5saW5rJ10sXHJcbiAgICAgICAgICAgIC8vIG9yIGh0bWxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnaHRtbCcgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gTm90ZTogaXQgaXMgdGVtcHRpbmcgdG8gcmF0aGVyIHN3aXRjaCB0byB0aGUgcmVhbCBIVE1MIG1vZGUgaW5zdGVhZCBvZiBidWlsZGluZyBvdXIgb3duIGhlcmVcclxuICAgICAgICAvLyBidXQgY3VycmVudGx5IHRoZXJlIGlzIGEgbGltaXRhdGlvbiBpbiBNb25hcmNoIHRoYXQgcHJldmVudHMgdXMgZnJvbSBkb2luZyBpdDogVGhlIG9wZW5pbmdcclxuICAgICAgICAvLyAnPCcgd291bGQgc3RhcnQgdGhlIEhUTUwgbW9kZSwgaG93ZXZlciB0aGVyZSBpcyBubyB3YXkgdG8ganVtcCAxIGNoYXJhY3RlciBiYWNrIHRvIGxldCB0aGVcclxuICAgICAgICAvLyBIVE1MIG1vZGUgYWxzbyB0b2tlbml6ZSB0aGUgb3BlbmluZyBhbmdsZSBicmFja2V0LiBUaHVzLCBldmVuIHRob3VnaCB3ZSBjb3VsZCBqdW1wIHRvIEhUTUwsXHJcbiAgICAgICAgLy8gd2UgY2Fubm90IGNvcnJlY3RseSB0b2tlbml6ZSBpdCBpbiB0aGF0IG1vZGUgeWV0LlxyXG4gICAgICAgIGh0bWw6IFtcclxuICAgICAgICAgICAgLy8gaHRtbCB0YWdzXHJcbiAgICAgICAgICAgIFsvPChcXHcrKVxcLz4vLCAndGFnJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC88KFxcdyspLyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGVtcHR5JzogeyB0b2tlbjogJ3RhZycsIG5leHQ6ICdAdGFnLiQxJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAndGFnJywgbmV4dDogJ0B0YWcuJDEnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFsvPFxcLyhcXHcrKVxccyo+LywgeyB0b2tlbjogJ3RhZycgfV0sXHJcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50JywgJ0Bjb21tZW50J11cclxuICAgICAgICBdLFxyXG4gICAgICAgIGNvbW1lbnQ6IFtcclxuICAgICAgICAgICAgWy9bXjxcXC1dKy8sICdjb21tZW50LmNvbnRlbnQnXSxcclxuICAgICAgICAgICAgWy8tLT4vLCAnY29tbWVudCcsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50LmNvbnRlbnQuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1s8XFwtXS8sICdjb21tZW50LmNvbnRlbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gQWxtb3N0IGZ1bGwgSFRNTCB0YWcgbWF0Y2hpbmcsIGNvbXBsZXRlIHdpdGggZW1iZWRkZWQgc2NyaXB0cyAmIHN0eWxlc1xyXG4gICAgICAgIHRhZzogW1xyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnd2hpdGUnXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLyh0eXBlKShcXHMqPVxccyopKFwiKShbXlwiXSspKFwiKS8sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkZWxpbWl0ZXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nLmh0bWwnLCBzd2l0Y2hUbzogJ0B0YWcuJFMyLiQ0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaHRtbCdcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLyh0eXBlKShcXHMqPVxccyopKCcpKFteJ10rKSgnKS8sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICdkZWxpbWl0ZXIuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3N0cmluZy5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnc3RyaW5nLmh0bWwnLCBzd2l0Y2hUbzogJ0B0YWcuJFMyLiQ0JyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdzdHJpbmcuaHRtbCdcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLyhcXHcrKShcXHMqPVxccyopKFwiW15cIl0qXCJ8J1teJ10qJykvLFxyXG4gICAgICAgICAgICAgICAgWydhdHRyaWJ1dGUubmFtZS5odG1sJywgJ2RlbGltaXRlci5odG1sJywgJ3N0cmluZy5odG1sJ11cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgWy9cXHcrLywgJ2F0dHJpYnV0ZS5uYW1lLmh0bWwnXSxcclxuICAgICAgICAgICAgWy9cXC8+LywgJ3RhZycsICdAcG9wJ10sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC8+LyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJFMyPT1zdHlsZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiAndGFnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnZW1iZWRkZWRTdHlsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2NzcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyRTMj09c2NyaXB0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkUzM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW46ICd0YWcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hUbzogJ2VtYmVkZGVkU2NyaXB0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEVtYmVkZGVkOiAnJFMzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0Jzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogJ3RhZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFRvOiAnZW1iZWRkZWRTY3JpcHQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RW1iZWRkZWQ6ICd0ZXh0L2phdmFzY3JpcHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGRlZmF1bHQnOiB7IHRva2VuOiAndGFnJywgbmV4dDogJ0Bwb3AnIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGVtYmVkZGVkU3R5bGU6IFtcclxuICAgICAgICAgICAgWy9bXjxdKy8sICcnXSxcclxuICAgICAgICAgICAgWy88XFwvc3R5bGVcXHMqPi8sIHsgdG9rZW46ICdAcmVtYXRjaCcsIG5leHQ6ICdAcG9wJywgbmV4dEVtYmVkZGVkOiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvPC8sICcnXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZW1iZWRkZWRTY3JpcHQ6IFtcclxuICAgICAgICAgICAgWy9bXjxdKy8sICcnXSxcclxuICAgICAgICAgICAgWy88XFwvc2NyaXB0XFxzKj4vLCB7IHRva2VuOiAnQHJlbWF0Y2gnLCBuZXh0OiAnQHBvcCcsIG5leHRFbWJlZGRlZDogJ0Bwb3AnIH1dLFxyXG4gICAgICAgICAgICBbLzwvLCAnJ11cclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=