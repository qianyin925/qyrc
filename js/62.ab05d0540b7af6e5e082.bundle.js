(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{804:function(e,t,n){"use strict";n.r(t),n.d(t,"conf",(function(){return a})),n.d(t,"language",(function(){return o}));var a={comments:{blockComment:["\x3c!--","--\x3e"]},brackets:[["<",">"]],autoClosingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],surroundingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}]},o={defaultToken:"",tokenPostfix:".xml",ignoreCase:!0,qualifiedName:/(?:[\w\.\-]+:)?[\w\.\-]+/,tokenizer:{root:[[/[^<&]+/,""],{include:"@whitespace"},[/(<)(@qualifiedName)/,[{token:"delimiter"},{token:"tag",next:"@tag"}]],[/(<\/)(@qualifiedName)(\s*)(>)/,[{token:"delimiter"},{token:"tag"},"",{token:"delimiter"}]],[/(<\?)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/(<\!)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/<\!\[CDATA\[/,{token:"delimiter.cdata",next:"@cdata"}],[/&\w+;/,"string.escape"]],cdata:[[/[^\]]+/,""],[/\]\]>/,{token:"delimiter.cdata",next:"@pop"}],[/\]/,""]],tag:[[/[ \t\r\n]+/,""],[/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,["attribute.name","","attribute.value"]],[/@qualifiedName/,"attribute.name"],[/\?>/,{token:"delimiter",next:"@pop"}],[/(\/)(>)/,[{token:"tag"},{token:"delimiter",next:"@pop"}]],[/>/,{token:"delimiter",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/<!--/,{token:"comment",next:"@comment"}]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,{token:"comment",next:"@pop"}],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3htbC94bWwuanMiXSwibmFtZXMiOlsiY29uZiIsImNvbW1lbnRzIiwiYmxvY2tDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwic3Vycm91bmRpbmdQYWlycyIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4IiwiaWdub3JlQ2FzZSIsInF1YWxpZmllZE5hbWUiLCJ0b2tlbml6ZXIiLCJyb290IiwiaW5jbHVkZSIsInRva2VuIiwibmV4dCIsImNkYXRhIiwidGFnIiwid2hpdGVzcGFjZSIsImNvbW1lbnQiXSwibWFwcGluZ3MiOiIyRkFBQSxxRkFLTyxJQUFJQSxFQUFPLENBQ2RDLFNBQVUsQ0FDTkMsYUFBYyxDQUFDLFVBQVEsV0FFM0JDLFNBQVUsQ0FDTixDQUFDLElBQUssTUFFVkMsaUJBQWtCLENBQ2QsQ0FBRUMsS0FBTSxJQUFLQyxNQUFPLEtBQ3BCLENBQUVELEtBQU0sSUFBTUMsTUFBTyxLQUNyQixDQUFFRCxLQUFNLElBQUtDLE1BQU8sTUFFeEJDLGlCQUFrQixDQUNkLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxLQUNwQixDQUFFRCxLQUFNLElBQU1DLE1BQU8sS0FDckIsQ0FBRUQsS0FBTSxJQUFLQyxNQUFPLE9BR2pCRSxFQUFXLENBQ2xCQyxhQUFjLEdBQ2RDLGFBQWMsT0FDZEMsWUFBWSxFQUVaQyxjQUFlLDJCQUNmQyxVQUFXLENBQ1BDLEtBQU0sQ0FDRixDQUFDLFNBQVUsSUFDWCxDQUFFQyxRQUFTLGVBRVgsQ0FBQyxzQkFBdUIsQ0FDaEIsQ0FBRUMsTUFBTyxhQUNULENBQUVBLE1BQU8sTUFBT0MsS0FBTSxVQUc5QixDQUFDLGdDQUFpQyxDQUMxQixDQUFFRCxNQUFPLGFBQ1QsQ0FBRUEsTUFBTyxPQUNULEdBQ0EsQ0FBRUEsTUFBTyxlQUdqQixDQUFDLHdCQUF5QixDQUNsQixDQUFFQSxNQUFPLGFBQ1QsQ0FBRUEsTUFBTyxVQUFXQyxLQUFNLFVBR2xDLENBQUMsd0JBQXlCLENBQ2xCLENBQUVELE1BQU8sYUFDVCxDQUFFQSxNQUFPLFVBQVdDLEtBQU0sVUFHbEMsQ0FBQyxlQUFnQixDQUFFRCxNQUFPLGtCQUFtQkMsS0FBTSxXQUNuRCxDQUFDLFFBQVMsa0JBRWRDLE1BQU8sQ0FDSCxDQUFDLFNBQVUsSUFDWCxDQUFDLFFBQVMsQ0FBRUYsTUFBTyxrQkFBbUJDLEtBQU0sU0FDNUMsQ0FBQyxLQUFNLEtBRVhFLElBQUssQ0FDRCxDQUFDLGFBQWMsSUFDZixDQUFDLDZDQUE4QyxDQUFDLGlCQUFrQixHQUFJLG9CQUN0RSxDQUFDLCtEQUFnRSxDQUFDLGlCQUFrQixHQUFJLG9CQUN4RixDQUFDLDZDQUE4QyxDQUFDLGlCQUFrQixHQUFJLG9CQUN0RSxDQUFDLGlCQUFrQixrQkFDbkIsQ0FBQyxNQUFPLENBQUVILE1BQU8sWUFBYUMsS0FBTSxTQUNwQyxDQUFDLFVBQVcsQ0FDSixDQUFFRCxNQUFPLE9BQ1QsQ0FBRUEsTUFBTyxZQUFhQyxLQUFNLFVBRXBDLENBQUMsSUFBSyxDQUFFRCxNQUFPLFlBQWFDLEtBQU0sVUFFdENHLFdBQVksQ0FDUixDQUFDLGFBQWMsSUFDZixDQUFDLE9BQVEsQ0FBRUosTUFBTyxVQUFXQyxLQUFNLGNBRXZDSSxRQUFTLENBQ0wsQ0FBQyxVQUFXLG1CQUNaLENBQUMsTUFBTyxDQUFFTCxNQUFPLFVBQVdDLEtBQU0sU0FDbEMsQ0FBQyxPQUFRLDJCQUNULENBQUMsUUFBUyIsImZpbGUiOiJqcy82Mi5hYjA1ZDA1NDBiN2FmNmU1ZTA4Mi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBjb21tZW50czoge1xyXG4gICAgICAgIGJsb2NrQ29tbWVudDogWyc8IS0tJywgJy0tPiddLFxyXG4gICAgfSxcclxuICAgIGJyYWNrZXRzOiBbXHJcbiAgICAgICAgWyc8JywgJz4nXVxyXG4gICAgXSxcclxuICAgIGF1dG9DbG9zaW5nUGFpcnM6IFtcclxuICAgICAgICB7IG9wZW46ICc8JywgY2xvc2U6ICc+JyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcclxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH0sXHJcbiAgICBdXHJcbn07XHJcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XHJcbiAgICBkZWZhdWx0VG9rZW46ICcnLFxyXG4gICAgdG9rZW5Qb3N0Zml4OiAnLnhtbCcsXHJcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxyXG4gICAgLy8gVXNlZnVsIHJlZ3VsYXIgZXhwcmVzc2lvbnNcclxuICAgIHF1YWxpZmllZE5hbWU6IC8oPzpbXFx3XFwuXFwtXSs6KT9bXFx3XFwuXFwtXSsvLFxyXG4gICAgdG9rZW5pemVyOiB7XHJcbiAgICAgICAgcm9vdDogW1xyXG4gICAgICAgICAgICBbL1tePCZdKy8sICcnXSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXHJcbiAgICAgICAgICAgIC8vIFN0YW5kYXJkIG9wZW5pbmcgdGFnXHJcbiAgICAgICAgICAgIFsvKDwpKEBxdWFsaWZpZWROYW1lKS8sIFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHRhZycgfVxyXG4gICAgICAgICAgICAgICAgXV0sXHJcbiAgICAgICAgICAgIC8vIFN0YW5kYXJkIGNsb3NpbmcgdGFnXHJcbiAgICAgICAgICAgIFsvKDxcXC8pKEBxdWFsaWZpZWROYW1lKShcXHMqKSg+KS8sIFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICd0YWcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlcicgfVxyXG4gICAgICAgICAgICAgICAgXV0sXHJcbiAgICAgICAgICAgIC8vIE1ldGEgdGFncyAtIGluc3RydWN0aW9uXHJcbiAgICAgICAgICAgIFsvKDxcXD8pKEBxdWFsaWZpZWROYW1lKS8sIFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnZGVsaW1pdGVyJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdtZXRhdGFnJywgbmV4dDogJ0B0YWcnIH1cclxuICAgICAgICAgICAgICAgIF1dLFxyXG4gICAgICAgICAgICAvLyBNZXRhIHRhZ3MgLSBkZWNsYXJhdGlvblxyXG4gICAgICAgICAgICBbLyg8XFwhKShAcXVhbGlmaWVkTmFtZSkvLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgeyB0b2tlbjogJ2RlbGltaXRlcicgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAnbWV0YXRhZycsIG5leHQ6ICdAdGFnJyB9XHJcbiAgICAgICAgICAgICAgICBdXSxcclxuICAgICAgICAgICAgLy8gQ0RBVEFcclxuICAgICAgICAgICAgWy88XFwhXFxbQ0RBVEFcXFsvLCB7IHRva2VuOiAnZGVsaW1pdGVyLmNkYXRhJywgbmV4dDogJ0BjZGF0YScgfV0sXHJcbiAgICAgICAgICAgIFsvJlxcdys7LywgJ3N0cmluZy5lc2NhcGUnXSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGNkYXRhOiBbXHJcbiAgICAgICAgICAgIFsvW15cXF1dKy8sICcnXSxcclxuICAgICAgICAgICAgWy9cXF1cXF0+LywgeyB0b2tlbjogJ2RlbGltaXRlci5jZGF0YScsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy9cXF0vLCAnJ11cclxuICAgICAgICBdLFxyXG4gICAgICAgIHRhZzogW1xyXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXHJcbiAgICAgICAgICAgIFsvKEBxdWFsaWZpZWROYW1lKShcXHMqPVxccyopKFwiW15cIl0qXCJ8J1teJ10qJykvLCBbJ2F0dHJpYnV0ZS5uYW1lJywgJycsICdhdHRyaWJ1dGUudmFsdWUnXV0sXHJcbiAgICAgICAgICAgIFsvKEBxdWFsaWZpZWROYW1lKShcXHMqPVxccyopKFwiW15cIj4/XFwvXSp8J1teJz4/XFwvXSopKD89W1xcP1xcL11cXD4pLywgWydhdHRyaWJ1dGUubmFtZScsICcnLCAnYXR0cmlidXRlLnZhbHVlJ11dLFxyXG4gICAgICAgICAgICBbLyhAcXVhbGlmaWVkTmFtZSkoXFxzKj1cXHMqKShcIlteXCI+XSp8J1teJz5dKikvLCBbJ2F0dHJpYnV0ZS5uYW1lJywgJycsICdhdHRyaWJ1dGUudmFsdWUnXV0sXHJcbiAgICAgICAgICAgIFsvQHF1YWxpZmllZE5hbWUvLCAnYXR0cmlidXRlLm5hbWUnXSxcclxuICAgICAgICAgICAgWy9cXD8+LywgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XSxcclxuICAgICAgICAgICAgWy8oXFwvKSg+KS8sIFtcclxuICAgICAgICAgICAgICAgICAgICB7IHRva2VuOiAndGFnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfVxyXG4gICAgICAgICAgICAgICAgXV0sXHJcbiAgICAgICAgICAgIFsvPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcclxuICAgICAgICAgICAgWy88IS0tLywgeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQGNvbW1lbnQnIH1dXHJcbiAgICAgICAgXSxcclxuICAgICAgICBjb21tZW50OiBbXHJcbiAgICAgICAgICAgIFsvW148XFwtXSsvLCAnY29tbWVudC5jb250ZW50J10sXHJcbiAgICAgICAgICAgIFsvLS0+LywgeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgICAgIFsvPCEtLS8sICdjb21tZW50LmNvbnRlbnQuaW52YWxpZCddLFxyXG4gICAgICAgICAgICBbL1s8XFwtXS8sICdjb21tZW50LmNvbnRlbnQnXVxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9