import React from 'react';
import Header from '../components/Header'
import ExpenseAddExpensePage from '../components/AddExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import Footer from '../components/Footer'
import ExpenseEditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={ExpenseAddExpensePage} exact={true} />
            <Route path="/edit/:id" component={ExpenseEditExpensePage} exact={true} />
            <Route path="/help" component={HelpPage} exact={true} />
            <Route component={NotFoundPage} />
        </Switch>
        <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;