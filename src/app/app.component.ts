import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'own-carousel';

  // public slides = [
  //   { src: "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMTAzMDg4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
  //   { src: "https://images.unsplash.com/photo-1566864222010-d45675442c31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMTAzMDg4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
  //   { src: "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxMTAzMDg4fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
  //   { src: "https://images.unsplash.com/photo-1563459094091-026377f7148b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8MTEwMzA4OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" }
  // ];

  public slides = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/90/Dscn3308-rg-e-from-w_900x500.jpg", msg: 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of\n' +
        '      length: a paragraph is a group of at least five sentences, a paragraph is half a page long,\n' +
        '      etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes\n' +
        '      a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit”\n' +
        '      (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a\n' +
        '      paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be\n' +
        '      just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main\n' +
        '      idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens\n' +
        '      in the rest of the paragraph.' },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/90/Dscn3308-rg-e-from-w_900x500.jpg", msg: 'The decision about what to put into your paragraphs begins with the germination of a seed of ideas; this “germination process” is better'},
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/90/Dscn3308-rg-e-from-w_900x500.jpg", msg: 'known as brainstorming. There are many techniques for brainstorming; whichever one you choose, this stage of paragraph development cannot be skipped. Building paragraphs can be like building a skyscraper: there must be a well-planned foundation that supports what you are building. Any cracks, inconsistencies, or other corruptions of the foundation can cause your whole paper to crumble.' },
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/90/Dscn3308-rg-e-from-w_900x500.jpg", msg: 'each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.' }
  ];

  next() {
    console.log('app next');
  }

  previous() {
    console.log('app previous');
  }
}
