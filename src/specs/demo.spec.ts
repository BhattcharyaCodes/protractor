import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('protractor with typescript typings', () => {
  beforeEach(async () => {
    await browser.get('http://www.angularjs.org');
  });

  it('should greet the named user', async () => {
    await element(by.model('yourName')).sendKeys('Julie');
    const greeting = element(by.binding('yourName'));
    expect(await greeting.getText()).toEqual('Hello Julie!');
  });

  it('should list todos', async () => {
    const todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(await todoList.count()).toEqual(2);
    expect(await todoList.get(1).getText()).toEqual('build an AngularJS app');
  });

  it('should load the header for the angularjs', aysnc() => {
  xpath_loc = '/html/body/div[1]/div[1]/div/h2';
  expect(await element(by.xpath(xpath_loc)).toEqual('AngularJS');
  });

  it('should load the basics section', async() => {
  basics_id = 'the-basics';
  expected_text = 'The Basics';

  expect(await element(by.id(basics_id)).toEqual()expected_text);
  });

//   it('should load th')

});
